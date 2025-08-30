from pathlib import Path
import sys

# 硬编码路径，请根据需要修改以下常量
INPUT_PATH = Path(r"E:\Documents\Work\VSCode\PS4MR_new\other\miscel\fktable.md")
ODD_PATH = Path(r"E:\Documents\Work\VSCode\PS4MR_new\other\miscel\fktable_odd.md")
EVEN_PATH = Path(r"E:\Documents\Work\VSCode\PS4MR_new\other\miscel\fktable_even.md")
ENCODING = "utf-8"

def split_lines(input_path: Path, odd_path: Path, even_path: Path, encoding: str = "utf-8"):
    try:
        with input_path.open("r", encoding=encoding) as src, \
             odd_path.open("w", encoding=encoding) as odd_f, \
             even_path.open("w", encoding=encoding) as even_f:
            for idx, line in enumerate(src, start=1):
                if idx % 2 == 1:
                    odd_f.write(line)
                else:
                    even_f.write(line)
    except Exception as e:
        print(f"Error: {e}", file=sys.stderr)
        sys.exit(1)

def main():
    # 使用硬编码路径代替命令行参数
    input_path = INPUT_PATH
    odd_path = ODD_PATH
    even_path = EVEN_PATH

    if not input_path.exists():
        print(f"输入文件不存在: {input_path}", file=sys.stderr)
        sys.exit(2)

    # 如果输出未指定（为空字符串），使用默认命名
    if not odd_path:
        odd_path = input_path.with_name(input_path.stem + "_odd" + input_path.suffix)
    if not even_path:
        even_path = input_path.with_name(input_path.stem + "_even" + input_path.suffix)

    # 防止输入与输出路径相同导致内容被覆盖
    if input_path.resolve() in (odd_path.resolve(), even_path.resolve()):
        print("输出路径不能与输入路径相同。请在脚本中指定不同的输出文件。", file=sys.stderr)
        sys.exit(3)

    split_lines(input_path, odd_path, even_path, encoding=ENCODING)
    print(f"已写入: 奇数行 -> {odd_path}, 偶数行 -> {even_path}")

if __name__ == "__main__":
    main()
