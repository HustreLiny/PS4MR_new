// Populate the sidebar
//
// This is a script, and not included directly in the page, to control the total size of the book.
// The TOC contains an entry for each page, so if each page includes a copy of the TOC,
// the total size of the page becomes O(n**2).
class MDBookSidebarScrollbox extends HTMLElement {
    constructor() {
        super();
    }
    connectedCallback() {
        this.innerHTML = '<ol class="chapter"><li class="chapter-item "><a href="translated/00_Contents_and_Preface_translated.html"><strong aria-hidden="true">1.</strong> 前言 | Contents and Preface</a></li><li class="chapter-item "><a href="translated/01_Statistics_in_medical_research_translated.html"><strong aria-hidden="true">2.</strong> 第1章 统计在医学研究中的应用 | Statistics in medical research</a></li><li class="chapter-item "><a href="translated/02_Types_of_data_translated.html"><strong aria-hidden="true">3.</strong> 第2章 数据类型 | Types of data</a></li><li class="chapter-item "><a href="translated/03_Describing_data_translated.html"><strong aria-hidden="true">4.</strong> 第3章 数据描述 | Describing data</a></li><li class="chapter-item "><a href="translated/04_Theoretical_distributions_translated.html"><strong aria-hidden="true">5.</strong> 第4章 理论分布 | Theoretical distributions</a></li><li class="chapter-item "><a href="translated/05_Designing_research_translated.html"><strong aria-hidden="true">6.</strong> 第5章 研究设计 | Designing research</a></li><li class="chapter-item "><a href="translated/06_Using_a_computer_translated.html"><strong aria-hidden="true">7.</strong> 第6章 计算机的使用 | Using a computer</a></li><li class="chapter-item "><a href="translated/07_Preparing_to_analyse_data_translated.html"><strong aria-hidden="true">8.</strong> 第7章 数据分析准备 | Preparing to analyse data</a></li><li class="chapter-item "><a href="translated/08_Principles_of_statistical_analysis_translated.html"><strong aria-hidden="true">9.</strong> 第8章 统计分析原理 | Principles of statistical analysis</a></li><li class="chapter-item "><a href="translated/09_Comparing_groups_continuous_data_translated.html"><strong aria-hidden="true">10.</strong> 第9章 连续型数据组间比较 | Comparing groups: continuous data</a></li><li class="chapter-item "><a href="translated/10_Comparing_groups_categorical_data_translated.html"><strong aria-hidden="true">11.</strong> 第10章 分类数据组间比较 | Comparing groups: categorical data</a></li><li class="chapter-item "><a href="translated/11_Relation_between_two_continuous_variables_translated.html"><strong aria-hidden="true">12.</strong> 第11章 两个连续变量的关系 | Relation between two continuous variables</a></li><li class="chapter-item "><a href="translated/12_Relation_between_several_variables_translated.html"><strong aria-hidden="true">13.</strong> 第12章 多变量关系 | Relation between several variables</a></li><li class="chapter-item "><a href="translated/13_Analysis_of_survival_times_translated.html"><strong aria-hidden="true">14.</strong> 第13章 生存时间分析 | Analysis of survival times</a></li><li class="chapter-item "><a href="translated/14_Some_common_problems_in_medical_research_translated.html"><strong aria-hidden="true">15.</strong> 第14章 医学研究中的常见问题 | Some common problems in medical research</a></li><li class="chapter-item "><a href="translated/15_Clinical_trials_translated.html"><strong aria-hidden="true">16.</strong> 第15章 临床试验 | Clinical trials</a></li><li class="chapter-item "><a href="translated/16_The_medical_literature_translated.html"><strong aria-hidden="true">17.</strong> 第16章 医学文献 | The medical literature</a></li><li class="chapter-item "><a href="translated/Appendix_A_Mathematical_notation_translated.html"><strong aria-hidden="true">18.</strong> 附录A 数学符号 | Appendix A: Mathematical notation</a></li><li class="chapter-item "><a href="translated/Appendix_B_Statistical_tables_translated.html"><strong aria-hidden="true">19.</strong> 附录B 统计表 | Appendix B: Statistical tables</a></li><li class="chapter-item "><a href="translated/Anwers_to_exercises_translated.html"><strong aria-hidden="true">20.</strong> 习题答案 | Answers to exercises</a></li><li class="chapter-item "><a href="translated/References_translated.html"><strong aria-hidden="true">21.</strong> 参考文献 | References</a></li><li class="chapter-item "><a href="translated/Index_translated.html"><strong aria-hidden="true">22.</strong> 索引 | Index</a></li></ol>';
        // Set the current, active page, and reveal it if it's hidden
        let current_page = document.location.href.toString().split("#")[0].split("?")[0];
        if (current_page.endsWith("/")) {
            current_page += "index.html";
        }
        var links = Array.prototype.slice.call(this.querySelectorAll("a"));
        var l = links.length;
        for (var i = 0; i < l; ++i) {
            var link = links[i];
            var href = link.getAttribute("href");
            if (href && !href.startsWith("#") && !/^(?:[a-z+]+:)?\/\//.test(href)) {
                link.href = path_to_root + href;
            }
            // The "index" page is supposed to alias the first chapter in the book.
            if (link.href === current_page || (i === 0 && path_to_root === "" && current_page.endsWith("/index.html"))) {
                link.classList.add("active");
                var parent = link.parentElement;
                if (parent && parent.classList.contains("chapter-item")) {
                    parent.classList.add("expanded");
                }
                while (parent) {
                    if (parent.tagName === "LI" && parent.previousElementSibling) {
                        if (parent.previousElementSibling.classList.contains("chapter-item")) {
                            parent.previousElementSibling.classList.add("expanded");
                        }
                    }
                    parent = parent.parentElement;
                }
            }
        }
        // Track and set sidebar scroll position
        this.addEventListener('click', function(e) {
            if (e.target.tagName === 'A') {
                sessionStorage.setItem('sidebar-scroll', this.scrollTop);
            }
        }, { passive: true });
        var sidebarScrollTop = sessionStorage.getItem('sidebar-scroll');
        sessionStorage.removeItem('sidebar-scroll');
        if (sidebarScrollTop) {
            // preserve sidebar scroll position when navigating via links within sidebar
            this.scrollTop = sidebarScrollTop;
        } else {
            // scroll sidebar to current active section when navigating via "next/previous chapter" buttons
            var activeSection = document.querySelector('#sidebar .active');
            if (activeSection) {
                activeSection.scrollIntoView({ block: 'center' });
            }
        }
        // Toggle buttons
        var sidebarAnchorToggles = document.querySelectorAll('#sidebar a.toggle');
        function toggleSection(ev) {
            ev.currentTarget.parentElement.classList.toggle('expanded');
        }
        Array.from(sidebarAnchorToggles).forEach(function (el) {
            el.addEventListener('click', toggleSection);
        });
    }
}
window.customElements.define("mdbook-sidebar-scrollbox", MDBookSidebarScrollbox);
