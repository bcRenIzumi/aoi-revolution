import pandas as pd
import os
from datetime import datetime

def excel_to_md_converter(excel_file_path, sheet_name='画面項目'):
    """
    Excelファイルの指定シートから、プロセスNoごとにグルーピングして
    Markdownファイルを生成する
    
    Args:
        excel_file_path (str): 対象のExcelファイルパス
        sheet_name (str): 対象のシート名（デフォルト：'画面項目'）
    """
    
    try:
        # Excelファイルを読み込み（3行目以降をデータとして読み込み）
        df = pd.read_excel(excel_file_path, sheet_name=sheet_name, header=1)
        
        # NaN値を空文字に置換
        df = df.fillna('')
        
        # 列名を確認用に出力
        print(f"読み込んだ列名: {list(df.columns)}")
        print(f"データ行数: {len(df)}")
        
        # B列（プロセスNo）でグルーピング
        process_no_col = df.columns[1]  # B列（0-indexed で1）
        process_name_col = df.columns[2]  # C列（0-indexed で2）
        flow_pattern_col = df.columns[3]  # D列（0-indexed で3）
        
        # プロセスNoでグルーピング
        grouped = df.groupby(process_no_col)
        
        # 各グループごとにMarkdownファイルを作成
        for process_no, group in grouped:
            # プロセスNoが空の場合はスキップ
            if process_no == '' or pd.isna(process_no):
                continue
                
            # 基本情報を取得（グループの最初の行から）
            first_row = group.iloc[0]
            process_name = first_row[process_name_col]
            flow_pattern = first_row[flow_pattern_col]
            
            # ファイル名を作成（プロセスNoを使用）
            safe_filename = str(process_no).replace('/', '_').replace('\\', '_')
            md_filename = f"{safe_filename}_画面項目一覧.md"
            
            # Markdownコンテンツを作成
            md_content = create_markdown_content(
                process_no=process_no,
                process_name=process_name,
                flow_pattern=flow_pattern,
                items_data=group,
                columns_e_to_q=df.columns[4:17]  # E～Q列（0-indexed で4～16）
            )
            
            # ファイルに書き込み
            with open(md_filename, 'w', encoding='utf-8') as f:
                f.write(md_content)
            
            print(f"作成完了: {md_filename}")
            
    except FileNotFoundError:
        print(f"エラー: ファイル '{excel_file_path}' が見つかりません。")
    except Exception as e:
        print(f"エラー: {str(e)}")

def create_markdown_content(process_no, process_name, flow_pattern, items_data, columns_e_to_q):
    """
    テンプレートに従ってMarkdownコンテンツを作成
    
    Args:
        process_no (str): プロセスNo
        process_name (str): プロセス名
        flow_pattern (str): フローパタン
        items_data (DataFrame): 項目データ
        columns_e_to_q (list): E～Q列の列名リスト
    
    Returns:
        str: Markdownコンテンツ
    """
    
    # 現在の日付を取得
    current_date = datetime.now().strftime('%Y/%m/%d')
    
    # 画面名を作成（プロセス名を使用）
    screen_name = process_name if process_name else process_no
    
    # Markdownコンテンツを作成
    md_content = f"""# {screen_name}画面 項目一覧
|日付|更新者|更新内容|
|---|---|---|
|{current_date}|ツール|新規作成|

## 基本情報
|プロセスNo|プロセス名（申請名）|フローパタン|
|---|---|---|
| {process_no} | {process_name} | {flow_pattern} |

## 項目
"""
    
    # E～Q列のデータをMarkdownテーブルに変換
    if len(columns_e_to_q) > 0:
        # ヘッダー行を作成
        header_row = "|" + "|".join([str(col) for col in columns_e_to_q]) + "|"
        separator_row = "|" + "|".join(["---" for _ in columns_e_to_q]) + "|"
        
        md_content += header_row + "\n"
        md_content += separator_row + "\n"
        
        # データ行を作成
        for _, row in items_data.iterrows():
            data_row = "|" + "|".join([str(row[col]) if pd.notna(row[col]) else "" for col in columns_e_to_q]) + "|"
            md_content += data_row + "\n"
    
    return md_content

if __name__ == "__main__":
    # 実行例
    excel_file_path = "【共通申請】プロセス修正ヒアリングシート_インフラソリューション部.xlsx"
    
    # ファイルの存在確認
    if os.path.exists(excel_file_path):
        print(f"Excelファイルを処理中: {excel_file_path}")
        excel_to_md_converter(excel_file_path)
        print("変換完了")
    else:
        print(f"エラー: ファイル '{excel_file_path}' が見つかりません。")
        print("現在のディレクトリ内のファイル:")
        for file in os.listdir('.'):
            if file.endswith('.xlsx'):
                print(f"  - {file}") 