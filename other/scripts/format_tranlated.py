"""
该脚本用于格式化翻译后的 Markdown 文件。
主要功能包括：
1. 合并同级的中英文标题，格式为 "中文标题  英文标题"。
2. 确保非空行以两个空格结尾，以支持 Markdown 的软换行。
"""

import os
import re

# 指定源目录和输出目录
SRC_ROOT = r"E:\Documents\Work\VSCode\PS4MR_new\src\translated"

# 匹配 Markdown 标题
heading_re = re.compile(r'^(#{1,6})\s+(.*)$')

def process_file(src_path):
    # 读取所有行，不保留末尾换行符
    lines = open(src_path, encoding='utf-8').read().splitlines()
    merged = []
    i = 0
    while i < len(lines):
        m1 = heading_re.match(lines[i])
        if m1:
            # 跳过空行，寻找下一个非空行
            j = i + 1
            while j < len(lines) and lines[j].strip() == "":
                j += 1
            # 如果下一个非空行也是同级标题，就合并
            if j < len(lines):
                m2 = heading_re.match(lines[j])
                if m2 and m1.group(1) == m2.group(1):
                    # 合并成一行：中文标题  两个空格  英文标题
                    merged.append(f"{m1.group(1)} {m1.group(2)}  {m2.group(2)}")
                    i = j + 1
                    continue
        # 否则正常保留此行
        merged.append(lines[i])
        i += 1

    # 2. 确保每行末尾都有两个空格（排除纯空行）
    out = []
    for ln in merged:
        if ln.strip() != "" and not ln.endswith("  "):
            ln = ln + "  "
        out.append(ln)

    # 写回源文件，末尾加一个换行
    with open(src_path, "w", encoding="utf-8") as f:
        f.write("\n".join(out) + "\n")

def main():
    file_list = []
    for dirpath, _, filenames in os.walk(SRC_ROOT):
        for fn in filenames:
            if fn.endswith(".md"):
                src_path = os.path.join(dirpath, fn)
                file_list.append(src_path)

    for idx, src in enumerate(file_list):
        print(f"[{idx+1}/{len(file_list)}] 处理文件: {src}")
        process_file(src)
        print(f"已写回源文件: {src}")
        ans = input("按回车继续，或输入 q 退出: ")
        if ans.strip().lower() == 'q':
            print("已中止后续处理。")
            break

if __name__ == "__main__":
    main()