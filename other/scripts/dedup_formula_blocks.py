#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
遍历 src/translated 目录下所有 .md 文件，删除 $$...$$ 公式块中重复的行，仅保留第一行
"""
import os
import re

# 配置
base_dir = r"E:\Documents\Work\VSCode\PS4MR_new\src\translated"

# 正则匹配 $$ 块中恰有两行公式的情况（允许行末有空格）
pattern = re.compile(r"\$\$\s*\n([^\n]*?)\s*\n([^\n]*?)\s*\n\s*\$\$", re.DOTALL)


def process_text(text: str) -> tuple:
    total_blocks = 0
    processed_blocks = 0
    def repl(m):
        nonlocal total_blocks, processed_blocks
        total_blocks += 1
        line1 = m.group(1).rstrip()
        line2 = m.group(2).rstrip()
        # 去掉所有空白和常见标点后比较
        f1 = re.sub(r'[\s。．.]+$', '', line1)
        f2 = re.sub(r'[\s。．.]+$', '', line2)
        if f1 == f2:
            processed_blocks += 1
            # 保留第一行
            return '$$\n' + m.group(1) + '\n$$'
        return m.group(0)

    new_text = pattern.sub(repl, text)
    return new_text, total_blocks, processed_blocks


def process_file(path: str) -> tuple:
    with open(path, 'r', encoding='utf-8') as f:
        content = f.read()
    new_content, total_blocks, processed_blocks = process_text(content)
    if new_content != content:
        with open(path, 'w', encoding='utf-8') as f:
            f.write(new_content)
        print(f'Processed: {path}  公式块: {total_blocks}  处理: {processed_blocks}')
    return total_blocks, processed_blocks


def main():
    if not os.path.isdir(base_dir):
        print(f"目录不存在: {base_dir}")
        return

    total_blocks = 0
    processed_blocks = 0
    file_list = []
    for root, dirs, files in os.walk(base_dir):
        for name in files:
            if name.lower().endswith('.md'):
                file_list.append(os.path.join(root, name))

    for full_path in file_list:
        t, p = process_file(full_path)
        total_blocks += t
        processed_blocks += p
        input("按回车键继续处理下一个文件...")

    print(f"\n全部文件共找到公式块: {total_blocks}，其中被处理: {processed_blocks}")


if __name__ == '__main__':
    main()
