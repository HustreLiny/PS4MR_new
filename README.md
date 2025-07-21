# PS4MR
使用mdbook构建电子书
1. 分章节：让AI写代码解决
2. 翻译：qwen3-253B-A22B，让AI写prompt（地道表达，语序，忠于原文，不得遗漏），在cherry测试，之后让AI写代码批量翻译（核心任务：把分好章节的eng_ver再依照标题分段eng_ver_seg，然后分章节翻译，每条消息发送一个seg，每个对话一个章节，合并形成cn_ver）4

目前的翻译方案还不错2.5flash，不用再改了
格式化（AI做，甚至可以写脚本）：
1. 中文和英文之间空一行
2. 标题格式化
- 按照编号设定标题层次
- 中文英文放在一行
3. 人工合并一些段落
  
[![GitBook](https://img.shields.io/static/v1?message=Documented%20on%20GitBook&logo=gitbook&logoColor=66ccff&label=%20&labelColor=5c5c5c&color=3F89A1)](https://www.gitbook.com/preview?utm_source=gitbook_readme_badge&utm_medium=organic&utm_campaign=preview_documentation&utm_content=link)

nvm不能用，还是装老版本nodejs和gitbook cli，然后install, build 吧
[text](https://chenxiwong.github.io/gitbook/blog/other/gitbookEnvPrepare.html)
[text](https://dianyao.co/gitbook-notes/1.%E5%9F%BA%E6%9C%AC%E4%BD%BF%E7%94%A8/%E6%8F%92%E4%BB%B6%E5%AE%89%E8%A3%85%E5%8F%8A%E5%B8%B8%E7%94%A8%E6%8F%92%E4%BB%B6.html)
[text](https://blog.csdn.net/qq_40889820/article/details/110013310)

$$
$chinese formula$
english formula
$$

在翻译的时候就提前过滤掉公式还是很重要啊！！！！

步骤：
1. 文章分章节 完成 
2. 图片本地化 完成
< 翻译
3. 修正公式
4. 行尾加空格 
5. 配置mdbook
6. 部署workflow