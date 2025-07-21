# 2 数据类型
# 2 Types of data

## 2.1 引言
## 2.1 INTRODUCTION

统计学远不止数据分析，在后续章节中，我将探讨实验设计和结果解读等方面。然而，统计学这门学科在很大程度上是关于数据的，因此，从简要讨论医学工作中可能遇到的各种数据类型开始是明智的。观察结果的性质对于选择正确的统计分析方法至关重要。数据可以是分类的或数值的（也称为定性或定量），但在这些广泛的分类中，还存在各种不同的数据类型。
There is a lot more to statistics than the analysis of data, and in later chapters I shall consider aspects such as the design of good experiments and the interpretation of results. Nevertheless statistics as a subject is very largely about data so it is sensible to start with a brief discussion of various types of data that may be encountered in medical work. The nature of the observations is of major importance in relation to the choice of correct statistical methods of analysis.Data can be either categorical or numerical (otherwise known as qualitative and quantitative), but within these broad classifications there are various different types of data.

数据可以是分类的或数值的（也称为定性或定量），但在这些广泛的分类中，还存在各种不同的数据类型。
Data can be either categorical or numerical (otherwise known as qualitative and quantitative), but within these broad classifications there are various different types of data.


## 2.2 分类数据
## 2.2 CATEGORICAL DATA

### 2.2.1 两类数据
### 2.2.1 Two categories

对个体进行观察的最简单类型是将其分配到仅有的两个可能类别之一。通常，这些类别与某种属性的存在或缺失有关。患者的此类分类示例包括：
The simplest type of observation on an individual is the allocation of that individual to one of only two possible categories. Often these relate to the presence or absence of some attribute. Examples of such categorizations for patients include:

1. 男性/女性
1. male/female

2. 怀孕/未怀孕
2. pregnant/not pregnant

3. 已婚/未婚
3. married/single

4. 糖尿病患者/非糖尿病患者
4. diabetic/non-diabetic

5. 吸烟者/非吸烟者
5. smoker/non-smoker

6. 高血压患者/血压正常者
6. hypertensive/normotensive

这类数据还有许多其他名称，如二元数据、二分类数据、属性数据、是/否数据和0-1数据。我们将在后面看到，给这两个类别赋予数值0和1有一些优势。请注意，虽然上述（1）和（2）明确将受试者分为两组，但其他例子都是更复杂数据的简化。
Such data have numerous other names such as binary data, dichotomous data, attribute data, yes/no data, and 0- 1 data. We will see later that there are some advantages in giving the numerical values 0 and 1 to the two categories.Notice that whereas (1) and (2) above definitely split subjects into two groups the other examples are all simplifications of more complex data.

请注意，虽然上述（1）和（2）明确将受试者分为两组，但其他例子都是更复杂数据的简化。
Notice that whereas (1) and (2) above definitely split subjects into two groups the other examples are all simplifications of more complex data.

例如，在没有进一步信息的情况下，不清楚如何对（3）中离婚的人或（5）中戒烟的人进行分类。（6）中将患者分为高血压或非高血压，是对测量值（此处为血压）设定了一个截点。通常，这是一种不理想的做法，不仅是从统计学角度来看。
For example, without further information it is not clear how to categorize people who have been divorced in (3) or ex- smokers in (5). The classification of patients as hypertensive or not (6) imposes a cut- off point on values of a measurement (here blood pressure). In general this is an undesirable practice, not always just from the statistical viewpoint.


### 2.2.2 两个以上类别
### 2.2.2 More than two categories

显然，许多分类需要两个以上的类别，例如出生国家或血型。上一节中的例子（3）和（4）可以扩展为以下几个类别：
Clearly many classifications require more than two categories, such as country of birth or blood group. Examples (3) and (4) in the previous section might be expanded into several categories as follows:

已婚/未婚/离婚/分居/丧偶
married/single/divorced/separated/widowed

青少年型糖尿病/成人发病型糖尿病/非糖尿病
juvenile- onset diabetes/maturity- onset diabetes/non- diabetic

另一个例子是血型：A/B/AB/O。这类数据也称为名义数据（nominal data）。
Another example is blood group: A/B/AB/O. Data of this type are also called nominal data.

在上述例子中，类别之间没有明显的顺序，但通常存在一种自然顺序，例如癌症（及其他疾病）的各种分期系统和社会阶层。回到香烟消耗的例子，通常将受试者分为：
In the above examples there is no obvious ordering of the categories, but often there is a natural order, as with the various staging systems for cancers (and other diseases) and social class. Returning to the example of cigarette consumption, it is common to classify subjects as

不吸烟者/已戒烟者/少量吸烟者/大量吸烟者
non- smokers/ex- smokers/light smokers/heavy smokers

其中吸烟程度可以进一步细分。这类数据也称为有序数据（ordinal data）。
where the degree of smoking could be subdivided further. Data of this type are also called ordinal data.

另一种有序分类数据出现在对无法测量的某事物进行主观评估时。例如，患者可能会将其疼痛程度分为：
Another type of ordered categorical data arises with subjective assessment of something that cannot be measured. For example, a patient may classify their degree of pain as

轻微/中度/严重/无法忍受
minimal/moderate/severe/unbearable

（但请参见2.4.5节）。
(but see section 2.4.5).

有序数据常被简化为两个类别，以简化分析和呈现，这可能导致大量信息丢失。
Ordinal data are often reduced to two categories to simplify analysis and presentation, which may result in a considerable loss of information.


## 2.3 数值数据
## 2.3 NUMERICAL DATA

### 2.3.1 离散数据
### 2.3.1 Discrete data

当所观察到的数据只能取某些数值时，就会产生离散型数值数据。几乎所有的例子都是事件的计数，例如子女数量、一年内看全科医生的次数、24小时内心脏异位搏动的次数等。
Discrete numerical data arise when the observations in question can only take certain numerical values. Virtually all examples are counts of events, such as number of children, number of visits to the GP in a year, number of ectopic heart beats in 24 hours, etc.

通过比较以下两种数据类型的例子，可以清楚地看出它们与前面描述的有序分类数据之间的区别：
The difference between such data as these and the ordered categorical data described earlier can be seen by considering an example of each:


*有序分类数据：*
*Ordered categorical:*

 乳腺癌分期：I II III IV
Stage of breast cancer: I II III IV

*离散型数值数据：*
*Discrete numerical:*

 子女数量：0 1 2 3 4 5+
Number of children: 0 1 2 3 4 5+

我们不能说IV期比II期严重两倍，也不能说I期和II期之间的差异等同于III期和IV期之间的差异。相比之下，三个孩子是一个孩子的三倍（尽管不一定差三倍！），并且在整个数值范围内，差异为一都意味着相同。
We cannot say that stage IV is twice as bad as stage II nor that the difference between stages I and II is equivalent to that between stages III and IV. In contrast, three children are three times as many as one (although not necessarily three times as bad!), and a difference of one means the same throughout the range of values.

在实践中，离散型数据在统计分析中常被视为有序分类数据。这样做没错，但可能未能充分利用数据。反之，当有序分类数据被编号时，例如疾病分期或社会阶层，必须抵制将这些数字视为具有统计学意义的诱惑。例如，计算平均社会阶层或平均癌症分期是没有意义的。这些数字所包含的唯一信息是其顺序，这与将其命名为A、B、C、D等所传达的信息是相同的。
In practice discrete data are often treated in statistical analyses as if they were ordered categories. This is not wrong, but it may not be getting the most out of the data. Conversely, where ordered categories are numbered, as with stage of disease or social class, the temptation to treat these numbers as statistically meaningful must be resisted. For example, it is not sensible to calculate the average social class or stage of cancer. The only information the numbers contain is in the ordering, which would be conveyed equally by calling them A, B, C, D and so on.


### 2.3.2 连续型数据
### 2.3.2 Continuous data

连续型数据通常通过某种形式的测量获得。常见的例子包括身高、体重、年龄、体温、血压和血清胆固醇。这类观测值不受限于特定数值，除非受限于测量仪器的精度。
Continuous data are usually obtained by some form of measurement. Common examples include height, weight, age, body temperature, blood pressure and serum cholesterol. Such observations are not restricted to certain values except insofar as this is restricted by the accuracy of the measuring instrument.

没必要将数据记录到很多小数位，但原则上可以做到这一点，这是连续测量的显著特性。因此，血压通常记录到最接近的 2 或 $5\mathrm{mmHg}$，成人体重记录到最接近的 $100 \mathrm{g}$。
It will not be necessary to record the data to numerous decimal places, but the fact that in principle it could be done is the distinguishing property of continuous measurements. Thus blood pressure is often recorded to the nearest 2 or perhaps  $5\mathrm{mmHg}$  , and body weight of adults to the nearest  $100 \mathrm{g}$  .

有时，将离散数据视为连续数据是合理的，至少就统计分析而言。虽然年龄是连续测量，但上次生日时的年龄是离散的。在针对年龄范围从 16 岁到 80 岁的成年人的研究中，将年龄（以年为单位）视为连续测量（这是标准做法）并无害处，但对于学龄前儿童的研究，最好使用年龄（以月为单位）。心率（以每分钟搏动次数计）是另一种通常被视为连续的离散测量。尽管这种状态改变的基本要求是应该有大量不同的可能值，但实际上我们并不太担心将离散测量分析为连续测量。
Sometimes it is reasonable to treat discrete data as if they were continuous, at least as far as statistical analysis goes. While age is a continuous measurement, age at last birthday is discrete. In studies of adults with ages ranging from, say, 16 to 80, no harm is done in considering age in years as a continuous measurement (and this is standard practice), but for studies of pre- school children it would be better to use age in months. Heart rate (in beats per minute) is another discrete measurement that is usually regarded as continuous. Although the essential requirement for this change of status is that there should be a large number of different possible values, in practice we do not worry too much about analysing discrete measurements as if they were continuous.

反之，连续数据常被简化为若干类别。
Conversely, continuous data are often reduced to several categories.

如果变量已知不精确，例如报告的每日吸烟支数，则将其分为以下类别可能更为合理：
Where the variable is known to be imprecise, such as reported number of cigarettes smoked per day, it may be sensible to have categories such as

否则，最好记录血压、血红蛋白等的实际值。在分析中很容易转换为类别，但如果只记录类别，原始数据以后就无法检索。信息丢失，没有补偿性收益。事实上，连续数据的统计分析更强大，而且通常更简单。
Otherwise, it is best to record the actual value of blood pressure, haemoglobin, etc. It is easy to convert to categories in the analysis, but the raw data cannot be retrieved later if only categories are recorded. Information is lost with no compensatory gain. Indeed, the statistical analysis of continuous data is more powerful, and often simpler.

当需要进行某些计算以得出感兴趣的观察结果时，应由计算机完成。因此，记录出生日期和检查日期以便后续计算年龄，远比依赖心算要好得多。
When some calculation is necessary to derive the observation of interest this should be done by the computer. Thus it is much better to record date of birth and date of examination for subsequent calculation of age rather than to rely on mental arithmetic.

测量精度和数据类型对于进行适当的统计分析都非常重要。
The degree of measurement accuracy and the type of data are both important in relation to carrying out a proper statistical analysis.


## 2.4 其他数据类型
## 2.4 OTHER TYPES OF DATA

前几节已经涵盖了医学研究中最常见的数据类型。本节将描述一些其他杂项数据类型。
The preceding sections have covered the most common types of data likely to be encountered in medical research. In this section some miscellaneous other types of data are described.


### 2.4.1 秩（Ranks）
### 2.4.1 Ranks

有时，所讨论的数据是某个群体成员在某些方面的相对位置。最明显的（尽管非医学）例子是体育比赛或考试。有时存在一个明确的潜在测量值，例如跑400米所需的时间，但在其他情况下则没有，例如在表达对不同治疗的偏好时。
Occasionally the data in question are the relative positions of the members of a group in some respect. The most obvious (although non- medical) example is in sporting competitions or examinations. Sometimes there is a clear underlying measurement, such as time to run 400 metres, but in other cases there is not, for example when expressing preferences between different treatments.

患者有时会接受两种或多种治疗，并被要求表达偏好。这种排名在医学工作中很少见，但其思想很重要。正如我们将在后续章节中看到的那样，在某些情况下，在分析数据之前，将一组个体的测量值转换为等级排序是一个好主意。
Patients are sometimes given two or more treatments and asked to express a preference. Such rankings are rare in medical work, but the idea is important. As we shall see in later chapters, in some circumstances it is a good idea to convert the measurements on a group of individuals into a rank ordering before analysing the data.


### 2.4.2 百分比
### 2.4.2 Percentages

百分比是在两个量之比时产生的。例如，左心室射血分数，它衡量心脏搏动时从左心室射出的血液百分比，以及相对体重（观察体重除以“理想”体重）。在第一个例子中，这个比率是两个都已
Percentages arise when one takes the ratio of two quantities. Examples are the left ventricular ejection fraction, which measures the percentage of blood ejected from the left ventricle when the heart beats, and the relative body weight (observed body weight divided by 'desirable' body weight). In the first example the ratio is of two quantities both of which have been

经测量过的量，而在第二个例子中，单个测量值除以一个预先存在的（常数）值，该值通常取自已发布的表格。
measured, while in the second a single measurement is divided by a pre- existing (constant) value usually taken from published tables.

尽管对已确立的测量值使用这些计算出的百分比是合理的，但通常希望保留计算中使用的两个量的所有信息。例如，仅仅记录每个个体治疗后血压降低的百分比并不是一个好主意。没有特别的理由以百分比降低来衡量药物的有效性。
Although it is reasonable to use these calculated percentages for well- established measurements, it is in general desirable to retain the information regarding both quantities used in the calculation. It would not, for example, be a good idea to record for each individual just the percentage reduction in blood pressure achieved following treatment. There is no particular reason to consider the effectiveness of a drug in terms of percentage reduction.

尽管百分比通常可以被视为连续测量值，但它们在分析中可能导致问题，尤其是在存在超过 $100\%$ 的值（例如相对体重），或者在计算某个测量值的百分比变化时可能出现负值的情况下。如果您的收缩压是 $150 \mathrm{mmHg}$，那么 $20\%$ 的升高会使其增加到 $180 \mathrm{mmHg}$，但随后的 $20\%$ 下降会使其回落到 $144 \mathrm{mmHg}$。在处理此类数据时，需要格外小心。
Although percentages may usually be regarded as continuous measurements they can cause problems in analysis, especially where there can be values either side of  $100\%$  (e.g. relative weight), or where there can be negative values as when calculating the percentage change in some measurement. If your systolic blood pressure is  $150 \mathrm{mmHg}$  then a  $20\%$  rise will increase it to  $180 \mathrm{mmHg}$ , but a subsequent fall of  $20\%$  will take it back down to  $144 \mathrm{mmHg}$ . Considerable care is necessary when considering such data.


### 2.4.3 比率和比例
### 2.4.3 Rates and ratios

类似的方法用于将观察到的频率转换为比率。例如，围产期死亡人数通常通过计算每1000次出生中的围产期死亡率来与总出生人数相关联。
A similar approach is used to convert an observed frequency to a rate. For example, the number of perinatal deaths is usually related to the total number of births by calculating the perinatal mortality rate per 1000 births.

有时，特定类型事件的发生频率会与预期事件数进行比较。例如，某个地区在给定时间段内白血病新发病例的预期数量可以通过将全国按年龄和性别划分的特定比率应用于该地区每个年龄性别组的人数来计算。观察值 $(O)$ 与预期值 $(E)$ 频率之比得出标准化死亡比，即 $100 \times O / E$。
Sometimes the frequency of events of a specific kind is compared with the expected number of events. For example, the expected number of new cases of leukaemia in an area in a given time period can be calculated by applying national age and sex specific rates to the numbers of people in the area in each age sex group. The ratio of the observed  $(O)$  to expected  $(E)$  frequencies yields the standardized mortality ratio as  $100 \times O / E$ .


### 2.4.4 评分
### 2.4.4 Scores

当无法进行直接测量时，通常可以通过某种方式对个体进行分级。最简单的形式是，这种系统可能涉及将皮疹分类为轻度、中度或重度。更普遍的是，临床医生经常使用诸如 $0, +, + +, + + +$ 等系统。尽管这些符号的含义非常明显，但这些类别通常没有明确定义，并且不同医生之间的分类可能不具可比性。显然，这种简单的量表是序数分类数据的进一步示例。
When it is not possible to take direct measurements it is often possible to grade individuals in some way. In its simplest form, such a system may involve classifying a skin rash, for example, as mild, moderate or severe. More generally clinicians often use systems such as  $0, +, + +, + + +$ . Although the meaning of such symbols is pretty obvious, the classes are usually undefined and will not be comparable from one doctor to another. Clearly, such simple scales are further examples of ordered categorical data.

然而，通常可以从多个方面对患者进行分类，例如根据各种症状和体征。对于每种症状，不同的编码可以赋予数值，并将这些数值相加得到一个总分。这个总分就是观察值。
Often, however, it is possible to classify patients in several ways, perhaps in relation to various symptoms and signs. For each symptom the different codings can be given numerical values and the various values added up to give a total score. This score is then the observation.

表 2.1 新生儿 Apgar 评分系统  
Table 2.1 Apgar system of scoring newborn babies  

<table><tr><td rowspan="2">体征</td><td colspan="3">评分</td></tr><tr><td>0</td><td>1</td><td>2</td></tr><tr><td>心率</td><td>无</td><td>慢 (&amp;lt; 100)</td><td>&amp;gt; 100</td></tr><tr><td>呼吸努力</td><td>无</td><td>哭声微弱；呼吸浅快</td><td>哭声响亮有力</td></tr><tr><td>肌张力</td><td>弛缓</td><td>四肢稍屈</td><td>四肢屈曲良好</td></tr><tr><td>对皮肤刺激（足部）的反应</td><td>无反应</td><td>稍有动作</td><td>哭泣</td></tr><tr><td>肤色</td><td>青紫；苍白</td><td>躯干粉红；四肢青紫</td><td>全身粉红</td></tr></table>
<table><tr><td rowspan="2">Sign</td><td colspan="3">Score</td></tr><tr><td>0</td><td>1</td><td>2</td></tr><tr><td>Heart rate</td><td>Absent</td><td>Slow (&amp;lt; 100)</td><td>&amp;gt; 100</td></tr><tr><td>Respiratory effort</td><td>Absent</td><td>Weak cry; hypoventilation</td><td>Good strong cry</td></tr><tr><td>Muscle tone</td><td>Limp</td><td>Some flexion of extremities</td><td>Well flexed</td></tr><tr><td>Reflex irritability (response to skin stimulation to feet)</td><td>No response</td><td>Some motion</td><td>Cry</td></tr><tr><td>Colour</td><td>Blue; pale</td><td>Body pink; extremities blue</td><td>Completely pink</td></tr></table>

一个著名的例子是用于评估新生儿健康的 Apgar 评分（Apgar, 1953）。表 2.1（摘自 Apgar 等人，1958）展示了“Apgar 评分”的获得方式。婴儿根据五项变量中的每一项被分为三类之一，分别评为 0、1 或 2 分，因此总分在 0 到 10 之间。在所有新生儿出生后一分钟和五分钟时计算 Apgar 评分是标准做法。在一分钟时，评分达到 7 分或更高为良好，而评分低于 3 分则非常差。
A well- known example is the Apgar score for evaluating the well- being of newborn babies (Apgar, 1953). Table 2.1 (from Apgar et al., 1958) shows how the 'Apgar score' is obtained. Infants are classified into one of three categories scored 0, 1 or 2 for each of five variables, and thus receive a total score of between 0 and 10. It is standard practice to calculate Apgar scores in all newborn babies at both one and five minutes after birth. At one minute a score of 7 or more is good, whereas a score of less than 3 is very bad.

这里不是讨论这个特定评分系统有用性或有效性的地方，但该系统的三个方面（这类方案的典型特征）应该被注意。首先，对于大多数体征，都涉及一定的主观性。其次，数值编码意味着从 0 到 1 或从 1 到 2 的任何差异都同样重要。第三，五项体征被认为同等重要。因此，综合评分包含了相当大的主观性，其中一些是组合过程中固有的，另一些则是个体评估中的主观性。
This is not the place to discuss the usefulness or validity of this particular scoring system, but three aspects of the system, which is typical of such schemes, should be noted. Firstly, for most of the signs some subjectivity is involved. Secondly, the numerical coding implies that any difference from 0 to 1 or from 1 to 2 is equally important. Thirdly, the five signs are considered equally important. Composite scores thus incorporate considerable subjectivity, some inherent in the combination procedure and some in the assessment of individuals.

在非医学领域，关于花样滑冰锦标赛中不同事件的相对权重存在相当大的争议，而十项全能的评分系统正在改变，因为某些事件的成就进步往往会低估其他事件。同样的问题也发生在合并不同考试分数时。综合评分的组成要素的权重不一定必须相等，尽管在临床实践中通常如此。
In a non- medical field there has been considerable controversy over the relative weights given to the different events in ice- skating championships, and the scoring system for the decathlon is being changed because advances in achievement in some events have tended to undervalue other events. The same problem occurs in combining marks from different exams. The weighting of constituent elements of a composite score does not have to be equal, although it usually is in clinical practice.


### 2.4.5 视觉模拟量表
### 2.4.5 Visual analogue scales

患者可能会被要求评估他们对某种不可测量事物的程度，例如疼痛、活动能力或饥饿感。一种改进有序
Patients may be asked to assess their degree of something unmeasurable like pain, mobility or hunger. A technique for improving on ordered

类别（如第2.2.2节所示）是视觉模拟量表（VAS）或线性模拟量表。患者会看到一条直线（通常长 $10\mathrm{cm}$），其两端标示着极端状态。他们被要求在线上标记一个点，代表他们对当前状态的感知。术后疼痛的VAS可能看起来像：
categories (illustrated in section 2.2.2) is the visual analogue scale (VAS) or linear analogue scale. The patient is shown a straight line (often  $10\mathrm{cm}$  long) the ends of which are labelled with extreme states. They are asked to mark the point on the line which represents their perception of their current state. A VAS for post- operative pain might look like

无痛|- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - 无法忍受的疼痛 患者标记
no pain|- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - unbearable pain patient's mark

其中 $\mathbf{X}$ 表示患者认为自己所处的量表位置。由于此类评估显然高度主观，因此这些量表在观察个体内部变化时最有价值。我们无法对某个分数（例如，从量表最左端测量的2.2）赋予任何绝对意义，但同一患者分数降至1.4则是可解释的。处理此类数据时需要谨慎。例如，我们可能更倾向于一种基于分数排序而非其精确值的分析方法。
where  $\mathbf{X}$  indicates the place on the scale where the patient judges himself to be. As such assessments are clearly highly subjective, these scales are of most value when looking at changes within individuals. We cannot put any absolute meaning on a score of, say, 2.2 (measured from the leftmost end of the scale), but a reduction to 1.4 in the same patient is interpretable. Caution is required in handling such data. We might, for example, prefer a method of analysis that is based on the rank ordering of scores rather than their exact values.


## 2.5 截尾数据
## 2.5 CENSORED DATA

如果一个观察值无法精确测量，但已知它超出了某个限度，则称其为截尾。常见导致截尾数据的情况有：
An observation is called censored if we cannot measure it precisely but know that it is beyond some limit. Common situations often producing censored data are:

1. 测量血液中某种微量成分时，实际水平可能低于机器或测试所能检测到的最低水平，尽管已知该值应大于零。此类值被称为“未检出”，但被认为是“在检测限处截尾”。由于惯例是将低值数据绘制在水平刻度的左侧，因此这也称为“左截尾”。
1. When measuring some trace constituent of blood the actual level may be below the lowest level that the machine or test can detect, even though it is known that the value should be greater than zero. Such values are termed non-detectable but are said to be censored at the limit of detectability. Because the convention is to plot data with low values to the left of a horizontal scale, this is also known as left censoring.

2. 在某些实验中，通常是动物实验，存在一个固定的随访期。在此期间，研究者可能在寻找某种特定状况的出现或消失，其中感兴趣的观察值是从实验开始所用的时间。如果到实验结束时没有任何情况发生，则这些观察值在该时间点是（右）截尾的。同样，在长期临床试验中，感兴趣的结局通常是生存期。在这种情况下，试验通常会在招募开始后的固定时间停止，因此在试验结束时仍然存活的患者都具有截尾的生存时间，截尾时间因患者在试验中的观察时间长短而异。
2. In some experiments, often with animals, there is a fixed length follow-up period. During this period the investigators may be looking for the appearance or perhaps disappearance of some specific condition, where the observation of interest is the time taken from the start of the experiment. Where nothing has happened by the end of the experiment, those observations are (right) censored at that time. Likewise, in long-term clinical trials the outcome of interest is often length of survival. Here the trial will usually stop at a fixed time after recruitment to the trial began, so that patients still alive at the end of the trial all have censored survival times, with the censoring being after different times of observation depending on how long the patient had been in the trial.

分析截尾生存数据的特殊技术将在第13章中描述。
Special techniques for analysing censored survival data will be described in Chapter 13.


## 2.6 变异性
## 2.6 VARIABILITY

统计学主要关注变异性；在医学研究中，这通常是指个体间的变异性。有时，变异性本身是首要关注点，例如在描述一组健康受试者中某些测量的可能值时。然而，我们通常更感兴趣的是检测可能被变异性掩盖的潜在趋势。例如，在比较两组不同患者的两种治疗方法时，患者对特定治疗的反应可能存在显著差异。变异性概念是统计学的基本概念，并将贯穿本书。
Statistics is largely about variability; in medical research this is often the variability between people. Sometimes it is the variability itself that is of prime interest, such as when describing the likely values of some measurement in a group of healthy subjects. Often, however, we are more interested in detecting underlying trends which may be obscured by variability. For example, when comparing two treatments on different groups of patients there may be considerable variation in the way patients respond to a particular treatment. The concept of variability is fundamental in statistics, and will recur throughout this book.

我们使用“变量”（variable）一词来表示数据集中任何会变化的事物。尽管许多变量与人类受试者（或动物）相关，但如果研究者正在研究国家之间的变异（例如围产期死亡率），比较小群体的个体特征，或观察同一受试者在不同条件下的测量变异，同样的考量也适用。
We use the term variable to denote anything that varies within a set of data. Although many variables relate to human subjects (or perhaps animals), the same considerations apply if one is studying variation from country to country (for example in perinatal mortality rates), comparing characteristics of small groups of individuals, or looking at variability in measurements of the same subject under different conditions.

本章前面给出的所有数据示例都称为变量。
All the examples of data given earlier in this chapter are called variables.


## 2.7 数据类型的重要性
## 2.7 IMPORTANCE OF THE TYPE OF DATA

刚才介绍的多种数据类型都可以通过统计方法进行分析，但数据类型对于确定哪些分析方法是合适（且有效）的至关重要。在许多医学研究中，会收集多种类型的变量，因此可能需要几种不同的分析方法。在第6章中，我将提供关于如何记录数据以便后续分析的建议。
The many types of data just introduced can all be analysed by statistical methods, but the type of data can be critically important in determining which methods of analysis will be appropriate (and valid). In many medical studies variables of several types are collected, so that several different analytic methods may be needed. In Chapter 6 I shall give advice on how to record data for subsequent analysis.

大多数统计方法都针对特定类型的数据，不同数据类型需要替代技术。然而，主要的区别在于连续变量和分类变量。此外，对于连续变量或有序分类变量，还可以使用适用范围更广的替代秩次方法。
Most statistical methods are specific to a certain type of data, with alternative techniques needed for different data types. The major distinction, however, is that between continuous and categorical variables. Further, for continuous or ordered categorical variables there is also the possibility of using alternative rank methods which are of much wider applicability.

这些分析方面将在本书中反复出现。使用适合数据类型的分析方法至关重要。
These aspects of analysis will feature throughout this book. It is essential to use a method of analysis that is appropriate for the type of data.


## 2.8 处理数字
## 2.8 DEALING WITH NUMBERS

### 2.8.1 统计分析
### 2.8.1 Statistical analysis

分析数据时，规则是使用记录数据的全部精度。不应对中间结果进行任何“四舍五入”（见下文）。如果您在计算机上进行分析，上述过程将自动发生。在计算器上，只有当中间计算结果存储在内存中时才会发生。
When analysing data the rule is to use the full precision of the recorded data. There should not be any 'rounding' of intermediate results (see below). If you carry out your analysis on a computer the procedure just described will happen automatically. On a calculator it will happen only if intermediate calculations are stored in memory.



### 2.8.2 结果呈现
### 2.8.2 Presenting results

关于结果呈现的建议将在许多后续章节中出现，但在此对数字呈现的一些一般性介绍性评论可能会有所帮助。
Advice on presentation of results appears in many later chapters, but some general introductory comments on presenting numbers may be helpful.

分类数据分析通常会得到事件发生次数的计数，例如不同血型受试者的数量，以及相应的百分比。如果（通常是期望的）给出了计数，那么百分比无需给出得非常精确。因此，例如，将45个中的17个表达为$37.78\%$是没有必要的，如果也给出了原始数字，那么$37.8 - 38\%$就足够了。带有许多数字的数值更难理解。百分比在非常小的样本中可能会产生误导—当你指的是四名患者中的一名时，不建议说$25\%$的患者对治疗反应良好。
Analysis of categorical data often leads to counts of occurrences, such as the numbers of subjects in different blood groups, together with the corresponding percentages. If, as is usually desirable, the counts are given the percentages do not need to be given very precisely. Thus, for example, it is not necessary to express 17 out of 45 as  $37.78\%$  or even  $37.8 - 38\%$  is sufficient if the raw numbers are given too. Numbers with many digits are much harder to assimilate. Percentages may mislead in very small samples - saying that  $25\%$  of patients responded well to the treatment is not recommended when you mean one out of four patients.

连续数据分析将会得到带有许多小数位的结果，例如平均舒张压为$85.348074 \mathrm{mmHg}$。像这样的结果显然应该通过四舍五入（见下一节）进行缩短，同时考虑到原始数据的准确性。在这个例子中，如果将平均血压报告为$85.3 \mathrm{mmHg}$，则不会丢失重要信息。
The analysis of continuous data will lead to results that have many decimal places, such as an average diastolic blood pressure of  $85.348074 \mathrm{mmHg}$ . Results like this clearly should be shortened by rounding (see next section), bearing in mind the accuracy of the original data. In this example no important information would be lost if the average blood pressure was reported as  $85.3 \mathrm{mmHg}$ .

对于小于1.0的数字，小数点前加零是更可取的—因此是0.729而不是.729。
For numbers less than 1.0 a zero before the decimal point is preferable - - thus 0.729 rather than .729.

通常最好将所有可比较的结果保留相同的小数位数。
It is usually best to quote all comparable results to the same number of decimal places.


### 2.8.3 数字的四舍五入
### 2.8.3 Rounding numbers

如果我们希望将85.348074这样的数字报告为更少的小数位数，我们使用一个简单的四舍五入规则。规则是，如果多余数字中的第一个小于五，则直接舍弃。否则，最后一个保留的数字加一。因此，将85.348074四舍五入到三位小数得到85.348，而四舍五入到两位小数得到85.35。如果被舍弃的信息是单独的5或5后面跟着零，有些人建议四舍五入到最接近的偶数位，而另一些人则总是向上进位。因此，将17.75四舍五入到一位小数得到17.8，但16.85将得到16.8或16.9，这取决于你的偏好。数字末尾的零应该保留。因此，如果我们将28.402或28.399四舍五入到两位小数，我们得到28.40。
If we wish to report a number such as 85.348074 to fewer decimal places, we use a simple rule for rounding. The rule is that excess digits are simply discarded if the first of them is less than five. Otherwise the last retained digit is increased by one. So rounding 85.348074 to three decimal places gives 85.348, while rounding to two decimal places gives 85.35. If the discarded information is a solitary 5 or a 5 followed by zeros some people recommend rounding to the nearest even digit, while others always round upwards. Thus rounding 17.75 to one decimal place gives 17.8, but 16.85 will give 16.8 or 16.9 depending upon your preference. Zeros on the end of a number should be retained. Thus if we round 28.402 or 28.399 to two decimal places we get 28.40.

警惕对同一个数字进行两次四舍五入，这可能导致错误。如果将85.348074四舍五入到两位小数，我们得到85.35。如果我们再决定将这个值四舍五入到一位小数，我们得到85.4而不是正确的85.3。
Beware of rounding the same number twice, which can lead to errors. If 85.348074 is rounded to two decimal places we get 85.35. If we then decide to round this value to one decimal place we get 85.4 rather than the correct value of 85.3.

四舍五入不应在最终呈现之前使用—在分析过程中应保留全部精度。
Rounding should not be used until the final presentation - full precision should be retained during the analysis.
