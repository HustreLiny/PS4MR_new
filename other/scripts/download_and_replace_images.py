import os
import re
import requests

# 配置
chapters_dir = r"e:/Documents/Work/VSCode/PS4MR/raw/"
img_root_dir = r"e:/Documents/Work/VSCode/PS4MR/images/"

# 获取所有 markdown 文件
md_files = [os.path.join(chapters_dir, f) for f in os.listdir(chapters_dir) if f.lower().endswith('.md')]

for md_file in md_files:
    # 以当前 md 文件名创建图片子目录
    base_name = os.path.splitext(os.path.basename(md_file))[0]
    img_dir = os.path.join(img_root_dir, base_name)
    os.makedirs(img_dir, exist_ok=True)

    with open(md_file, 'r', encoding='utf-8') as f:
        content = f.read()

    # 匹配所有图片链接
    pattern = r'!\[]\((https://cdn-mineru.openxlab.org.cn/extract/[^)]+)\)'
    urls = re.findall(pattern, content)
    url_map = {}

    for idx, url in enumerate(urls, 1):
        ext = os.path.splitext(url)[1].split('?')[0]
        if not ext or len(ext) > 5:
            ext = '.jpg'
        img_name = f"img{idx}{ext}"
        img_path = os.path.join(img_dir, img_name)
        # 下载图片
        if not os.path.exists(img_path):
            try:
                resp = requests.get(url, timeout=20)
                resp.raise_for_status()
                with open(img_path, 'wb') as imgf:
                    imgf.write(resp.content)
                print(f"Downloaded: {url} -> {img_path}")
            except Exception as e:
                print(f"Failed to download {url}: {e}")
        rel_path = os.path.relpath(img_path, os.path.dirname(md_file)).replace('\\', '/')
        url_map[url] = rel_path

    # 替换所有链接
    for url, rel_path in url_map.items():
        content = content.replace(url, rel_path)

    # 保存修改后的 Markdown 文件
    with open(md_file, 'w', encoding='utf-8') as f:
        f.write(content)


    print(f"已处理完成: {md_file}，共处理图片链接 {len(urls)} 个")
    user_input = input("请检查该文件效果，如有问题请按Ctrl+C终止，按回车继续处理...\n")

print("所有图片下载和链接替换完成！")
