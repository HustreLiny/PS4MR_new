# 5 Designing research

Probably no aspect of clinical research is as neglected as study design. Eager young investigators attend classes on medical statistics, find dozens of ways to compute  $\mathbf{\nabla}^{\bullet}\mathbf{P}^{\bullet}$  values, but rarely learn how to organize a clinical research project properly. Yet careful study design is the foundation of quality clinical research.

Noller and Melton (1985)

There are only a handful of ways to do a study properly but a thousand ways to do it wrong.

Sackett (1986)


## 5.1 INTRODUCTION

All medical research is carried out in relation to one or more objectives, which should focus the plan or design of the research. In some cases there is a clear best way to proceed, but more often there is a choice of reasonable ways of designing a study. The statistical aspects of design relate mainly to the structure of the study and all aspects of the collection of data, including the choice of measurements to make and their frequency. Although many of the general issues covered in this chapter apply to clinical trials, these have many special features and are discussed in detail in Chapter 15.

Research can be crudely divided into observational and experimental studies. In observational studies we collect information about one or more groups of subjects, but do nothing to affect them. Observational studies can be prospective, where subjects are recruited and data are collected about subsequent events, or retrospective, where information is collected about past events. Observational studies include censuses, surveys, casecontrol studies and cohort studies; they are considered in sections 5.9 to 5.12.

Experimental studies are those in which the researcher affects (controls) what happens to all or some of the individuals. Similar problems arise in studies of humans, animals and laboratory samples, although the emphasis

in this chapter is on clinical studies. Sections 5.4 to 5.8 consider the design of experimental studies.

Most studies aim to answer fairly simple questions but it does not necessarily follow that they require fairly simple designs. The key point is to tailor the research design to the study objective(s). Without adequate planning the researcher cannot expect to be able to make meaningful conclusions. Some important general principles of design are discussed later in this chapter.

In most research we wish to extrapolate the results from a study to the population in general. There are two aspects that require particular attention in this respect. First, the sample(s) studied should be representative of the population(s) of interest; this applies especially to observational studies. Secondly, groups being compared should be as alike as possible apart from the features of direct interest; this applies particularly in experimental studies, such as clinical trials, but is also relevant in many observational studies, such as case- control studies. I return to these issues below.

Research design is arguably the most important aspect of the statistical contribution to medicine. It is for this reason that for over 50 years statisticians have been urging medical researchers to consult them at the planning stage of their study, rather than at the analysis stage. The data from a good study can be analysed in many ways, but no amount of clever analysis can compensate for problems with the design of a study.


## 5.2 CATEGORIES OF RESEARCH DESIGN

Research designs can be classified in several ways, some of which are:

1. observational or experimental; 
2. prospective or retrospective; 
3. longitudinal or cross-sectional.

These terms are explained below. The first classification relates to the purpose of the study, while the others describe the way in which the data are collected. Not all combinations of these classifications are possible, but most are.


### 5.2.1 Observational or experimental

In an observational study the researcher collects information on the attributes or measurements of interest, but does not influence events. An example would be a study to discover the prevalence of hearing difficulties in small children. Observational studies include surveys and most epidemiological studies. By contrast, in an experimental study the researcher

deliberately influences events and investigates the effects of the intervention. Experimental studies include clinical trials and many animal and laboratory studies. In general stronger inferences can be made from experimental studies than from observational studies. Experimental studies are usually carried out to make comparisons between groups; observational studies may also be comparative, but they are often essentially descriptive.


### 5.2.2 Prospective or retrospective

There is a clear distinction between prospective studies, in which data are collected forwards in time from the start of the study, and retrospective studies, in which data refer to past events and may be acquired from existing sources, such as hospital notes, or by interview. Experiments are prospective, but observational studies may be prospective or retrospective. Of course, retrospective data can be obtained to compare different treatments, for example different types of mastectomy, but such a study would not be an experiment as it was not a pre- specified study performed under standardized conditions. Retrospective studies include case- control studies (see section 5.10).


### 5.2.3 Longitudinal or cross-sectional

Longitudinal studies are those which investigate changes over time, possibly in relation to an intervention. Observations are taken on more than one occasion, although they may not all be used in the analysis. Clinical trials are longitudinal because we are interested in the effect of treatment commencing at one time point on outcome at a later time. Cross- sectional studies are those in which individuals are observed only once. Most surveys are cross- sectional, as are studies to construct reference ranges. Observational studies may be longitudinal or cross- sectional, but experiments are usually longitudinal.

There is also the 'pseudo- longitudinal' study in which each subject is seen at only one time, but the data are used to describe changes over time. Examples are studies to derive cross- sectional growth charts for children and studies of hormone levels during the menstrual cycle (see section 5.13).


### 5.2.4 Summary of inter-relationships

Figure 5.1 summarizes the most likely possible combinations of design features. There is a clear distinction between experimental studies which are nearly all prospective and longitudinal, and observational studies which can be either retrospective or prospective and also either cross- sectional or

![](../images/05_Designing_research/img1.jpg)  
Figure 5.1 Types of research design.

longitudinal. For this reason experiments and observational studies are considered separately later in this chapter.

It is possible to construct more complex categorizations of research designs (Bailar et al., 1984), but Figure 5.1 describes the main features of most research studies.

So far discussion of design has related to broad issues. The following sections look at design in more detail with particular emphasis on two important aspects of statistical inference from the sample to the population - the representativeness of the sample and the interpretation of any associations found.


### 5.2.5 Control

Whatever the experiment, it is essential to have a comparison, or control, group to which the experimental procedure is not applied. It is not usually scientifically or ethically acceptable to say 'Let's try this new treatment on some patients and see what happens'. It is far better to have a control group who are treated normally (or in some way differently), against which comparisons can be made. If we wish to evaluate the benefits of mothers counting fetal movements in pregnancy we should have a concurrent control group of mothers who do not count movements. This is a key component of the evaluation of new therapies or procedures in medicine.

Controls are also advisable in observational studies. If we ask users of visual display terminals (VDTs) if they get eye strain or backache, we should also ask the same questions of a group of comparable employees who do not use VDTs.

In each case the presence of the control group strengthens the inferences that may be made from the results of the study. However, as I shall discuss below, the choice of suitable controls in observational studies is not easy.


## 5.3 SOURCES OF VARIATION

Chapters 3 and 4 both began with comments about the importance of variability to the statistical approach. Variability in behaviour or response to some stimulus, be it tobacco or an antibiotic drug, is the norm. As noted in Chapter 3, some sources of variability may be known, or suspected, but much remains unexplained. For example, we know several variables that affect birth weight, such as length of gestation, fetal sex, parity, maternal smoking, height above sea level, and so on, but statistical models incorporating such information explain only about a quarter of the variability in birth weight. While there are undoubtedly other factors not yet identified that contribute to the variability, it is most unlikely that any important factors remain unidentified. The bulk of the observed variability must therefore be considered unexplainable, which we call random variation. There is considerable random variation in most clinical measurements. For some, such as body temperature, there is relatively little variation, but for others, such as birth weight, blood pressure, or many serum constituents, there is enormous variation. When we are designing a study to compare groups with respect to levels of some clinical measurement, this natural variability must be borne in mind. We can think of this random variability as 'background noise', against which we are trying to detect some effect, or 'signal', of interest. There is a good analogy here with the concept of the 'signal to noise' ratio used in other fields. If the outcome measurement is highly variable we will need a larger study to be able to detect a systematic effect of interest. Another possible design to consider is that in which we remove between subject variation by studying within subject changes from a baseline level.

Further, individuals will exhibit similar variation in other characteristics not directly being studied but which might affect the variables of interest. Many of the principles of experimental design are aimed at trying to control variation that we are not interested in, so that we can focus our attention on the variability that we are interested in. Two consequences of this general variability relevant to the design of studies are:

1. Care is needed to make samples representative of the population. 
2. In comparative studies care is needed in making groups similar with respect to known sources of variation.

In addition, we need to bear in mind that when the measurement of interest is highly variable, large samples are needed to get reliable results.

These issues are discussed below, firstly for experimental studies and then for observational studies. However, methods for calculating the appropriate sample size for comparative studies are given in Chapter 15. as they are most often used when designing clinical trials.

Before examining different types of experimental design in detail it should help to consider a real study that illustrates many of the issues.

An experiment: is the blood pressure the same in both arms? 79


## 5.4 AN EXPERIMENT: IS THE BLOOD PRESSURE THE SAME IN BOTH ARMS?

Blood pressure is a particularly variable measurement. Not only does it vary considerably between individuals, for which we have partial explanation, but it varies greatly over time for each individual. There is marked variation over 24 hours (circadian variation) as well as day- to- day variation. In addition, blood pressure is difficult to measure. In recent years new technology has been developed to allow continuous recording of blood pressure via an indwelling catheter in the arm linked to a small tape recorder. Ambulatory blood pressure monitoring is more informative, as it gives data for 24 hours, and also potentially more accurate as it measures blood pressure directly and without observer error. Many people regard this intra- arterial technique as the 'gold standard' against which to judge new methods, in particular indirect (i.e. non- invasive) ambulatory recorders. Because of the variability referred to it is important to take simultaneous measurements using the two devices, and thus to use both arms. The question then arises as to whether there might be any systematic difference in blood pressure between the left and right arms.

A study to answer this question was described by Gould et al. (1985). The design was as follows. The equipment used to measure the blood pressure was a 'random zero' sphygmomanometer, a machine designed to remove observer bias. (To the reading observed must be added another 'random' quantity not known until afterwards.) A cuff was attached to each arm, and both were connected to the same sphygmomanometer. An electric air pump was used to equalize the pressure to the two cuffs. Clearly it was necessary to have two observers - one to each arm. Despite the use of a special sphygmomanometer it was important that the observers did not measure only one arm in case there was a systematic difference between the observers. Thus each observer had to take half of the observations on the left arm and half on the right, and it was felt sensible (although it was not essential) for each observer to measure both arms of each patient. A similar argument applied to the two cuffs, which might have been slightly different. Thus each cuff had to be applied equally to each arm and again this was carried out for each patient. In view of the known variability of blood pressure it was decided that each observer would take two measurements using each cuff on each arm of each patient, giving 16 measurements per patient. Finally, there might have been a tendency for a patient's blood pressure to change systematically during the series of measurements. Thus the order in which the cuffs were applied to the arms and the order in which the observers measured the two arms was varied using randomization. A detailed explanation of randomization is given in section 5.7. There was no communication of results between observers.

The study was carried out on 91 subjects with essential hypertension.


The above design was used to try to get as pure a comparison as possible of the blood pressure in the left and right arms. In addition the circumference of each arm was recorded, and a record was kept of the order in which the measurements were taken for each subject. This study illustrates many features of the design of an experiment, some of which will be discussed in more detail in section 5.5:

Number of observers It was necessary to have two observers per subject, but it is often a good idea to have more than one observer even when it is not necessary, as it allows the differences between observers to be quantified (see section 14.2).

Replicated measurements It is desirable to take more than one reading in each combination of experimental conditions as it gives greater precision for estimating the effects of interest. The replicates need to be independent readings, however. They were independent in the arm comparison study because the type of machine used meant that the observers did not know what their previous measurement was.

Balanced design It is not essential that the same number of observations is taken for each combination of experimental factors, but if everything is balanced, as in the above study, the analysis is very much simpler.

Randomization The order in which the observers and cuffs were allocated to the two arms for each patient was determined at random. Randomiza­ tion is one of the key elements of experimental design.

Covariates Sometimes there are non- experimental features (covariates) that need to be recorded as they might have affected the results. While they may vary from observation to observation, such as ambient tem­ perature, they may vary only from subject to subject, such as age. In this study arm circumference was considered to be a possible covariate as it affects the fit of the cuff. Arm circumference is intermediate between the two examples given, varying within subject (i.e. between arms) but not from observation to observation. Another potential covariate was the order of observations. The design was randomized and balanced because it was anticipated that recorded blood pressure would fall over repeated measure­ ments. However, it is possible to take account of the order of measure­ ments in the analysis to improve precision.

Sample size A large sample was taken to provide a precise estimate of the difference between the arms.


## 5.5 THE DESIGN OF EXPERIMENTS

An experiment should be designed to answer the question of interest as simply and clearly as possible. It is important to consider the way the data

will be analysed when designing an experiment as this can save complications later. This chapter considers experiments in general. Chapter 15 considers clinical trials in depth, as there are many special issues involved.

In this section I discuss some of the more important aspects to consider when designing an experiment.


### 5.5.1 Bias

Any study, whether experimental or observational, will be set up to answer one or more specific questions. The reliability of the results, and thus the interpretation of the findings, is crucial. An experiment provides the best opportunity to get at the truth, but there are several precautions that should be taken to ensure that the results are not biased. For example, in a comparative experiment, such as the arm comparison study, it is important that the groups of observations being compared are comparable in all aspects other than that being manipulated by the experimenter. Several of the design features of the arm comparison study were included for this reason.

Bias can occur through structural deficiencies in a study. For example, if one observer had taken all measurements on the left arm and the other all those on the right arm, the between arm differences would have been inseparable from any between observer differences, an effect called confounding. In fact, that study was carried out expressly to see if there would be confounding when different machines were compared one to an arm. Making sure that the different observer- arm- cuff combinations were used equally in the 1st, 2nd, 3rd and 4th orders is another example of avoiding bias.


### 5.5.2 Randomization

An important possible source of bias is the way in which subjects vary in features that are not part of the design. For example, if we had measured blood pressure in the left arm only in one group of patients and in the right arm only in another group, then the average difference observed between left and right arms could be affected by differences between the groups with respect to any variable related to blood pressure, such as age. Clearly it is better to use both arms in the same patients, but in most studies the procedures or treatments cannot be given to the same individuals. The usual approach here is to allocate treatments to patients at random. As described in section 5.7, the word random has a specific statistical meaning. Random allocation is one of the fundamental principles of experimental design. Another device is to find pairs of subjects with closely similar characteristics and allocate treatments to the matched pair at random. Matching is discussed in section 5.8.

In the arm comparison study the order in which the observers measured the left and right arms and the order of use of the two cuffs were randomized. There was no specific reason to expect a bias from, for example, observer 1 always starting on the left arm, but random ordering was used as a safeguard against possible subtle unknown effects.


### 5.5.3 Blinding

Bias can also occur through subconscious effects. For example, observers' judgements may be affected by knowing the treatment that a subject is getting, or by knowledge of a previous measurement for that subject. The latter problem was avoided in the arm comparison study by the choice of blood pressure measuring machine. The former problem is especially relevant in clinical trials, where it is desirable to keep both patients and assessors in ignorance of the treatment given, a procedure known as blinding (see Chapter 15).


### 5.5.4 Replication

For measurements that are highly variable or difficult to measure accurately it may be useful to take more than one measurement on each individual. These replicates can be treated in the analysis as separate observations, which may make the analysis more complicated but gives greater potential to detect effects of interest. This analysis is only valid if the replicates are independent, which is often not the case if the observer knows what measurement they obtained the first time.

More often the average of the replicates is used in the analysis. This latter approach may mirror clinical practice - some 'noisy' variables such as blood pressure, peak expiratory flow rate, and ultrasound measurements are usually repeated.


### 5.5.5 Sample selection

It is always desirable for the sample in a study to be representative of the population of interest, but this is not as important in experiments as in observational studies. For example, it is unlikely that the choice of the sample for the arm difference study would have affected the results. It is much more important to ensure that the sub- groups being compared are as similar as possible.

Although in principle representative samples are best obtained by random selection from the population, this ideal is virtually never met in practice. However, the sample should be chosen to be as similar as possible to the relevant population, so it is essential to be able to describe just how the sample was chosen.

These considerations are probably irrelevant for most animal experiments.


### 5.5.6 Sample size

Another way of combating variability is to increase the sample size. Larger samples enable us to evaluate effects of interest more precisely. The determination of an appropriate sample size is most common in clinical trials and section 15.3 describes formal methods for choosing an appropriate sample size in comparative studies. Similar principles apply to all studies, but the methods can be complicated so expert assistance is required.


## 5.6 THE STRUCTURE OF AN EXPERIMENT

In a designed experiment such as the arm comparison study there may be several conditions (called factors) being controlled by the investigator. It may be helpful to draw a diagram to show the structure of the design. As well as clarifying the design the diagram will show how the data should be analysed.

A simple example is an experiment to compare three separate groups of subjects given different analgesics to combat migraine. Figure 5.2 shows the simple structure of this design. Each x denotes an observation. In this design there is no need for the three groups to be of equal size but in more complicated designs equal sizes are highly desirable. If the study design

![](../images/05_Designing_research/img2.jpg)  
Figure 5.2 Structure of a study to compare three groups of subjects receiving analgesics A, B or C. Each x indicates one subject.

were changed so that each subject received all three analgesics in random order, the design would be as shown in Figure 5.3. Here observations on the same subject are connected.

A study may combine both these features, so that subjects are examined more than once but different groups of subjects are treated differently. For example, we may wish to compare subjects' weights before and after different diets; Figure 5.4 shows the appropriate design. Figures 5.2 to 5.4 illustrate the important distinction between within subject and between subject comparisons.

The study comparing blood pressure in the left and right arms was more complicated. There were three factors - arms, observers and cuffs - and two measurements (replicates) were taken for each combination. The design of this study, which is shown in Figure 5.5, is known as a factorial design as all combinations of factors are used.

It is not possible to say what the best design is in any given circumstance. The choice of factors to control, which factors are between subject and which within, and how many observations to take for each subject is difficult, and it will often take much thought to arrive at a satisfactory design. Expert statistical help is particularly valuable at this stage. Any weaknesses in the design cannot be rectified later.

![](../images/05_Designing_research/img3.jpg)  
Figure 5.3 Structure of a study to compare three treatments in one group of subjects. Lines join observations on the same subject, which are made in random order.

![](../images/05_Designing_research/img4.jpg)  
Figure 5.4 Structure of a study to compare two groups measured before and after treatment.

![](../images/05_Designing_research/img5.jpg)  
Figure 5.5 Structure of the study to compare blood pressure in the left and right arms - a three way factorial design.


## 5.7 RANDOM ALLOCATION

There have been several mentions of random allocation earlier in this chapter. The rationale for and methods of randomization in experimental studies are discussed in this section.

There are two main reasons for using randomization. The first reason is to prevent bias. As noted earlier, we want to compare treatments between groups which do not differ in any systematic way. If subjects receive treatments chosen by the investigator (or indeed the subject) there is the likelihood of bias arising - usually subconscious but occasionally intentional. We can avoid this possibility by allocating treatments to subjects at

random. There is further discussion of this issue with regard to clinical trials in section 15.2.2.

Bias can also arise through unknown effects. For example, when two or more treatments (or experimental conditions) are used for each subject it is advisable to randomize the order in which they are applied to each subject in case there is any unknown bias associated with time or the order of measurements. This argument was behind the randomization of the order of measurements in the arm comparison study.

The other reason for randomizing is that statistical theory is based on the idea of random sampling. In a study with random allocation the differences between treatment groups behave like the differences between random samples. As noted in Chapter 4, we know how random samples are expected to behave, and so can compare the observations with expectation, for example assuming that the treatments are equally effective.


### 5.7.1 Simple randomization

It is not always appreciated that random does not mean the same as haphazard. By random allocation we mean that each patient has a known chance, usually an equal chance, of being given each treatment, but the treatment to be given cannot be predicted. Thus alternately allocating two treatments to a series of patients is not random allocation. The simplest method of random allocation is tossing a coin - heads is treatment A, tails is treatment B. An equivalent method is to use a table of random numbers, such as that in Table B13. In these tables each number occurs equally often, and the ordering is random, and so completely unpredictable. Another option is to use a random number generator on a computer.

The first step is to decide the correspondence between the random numbers and the different experimental groups. For example, if we wish to allocate equally two treatments to subjects using Table B13 we could take odd numbers to indicate one treatment and even numbers to indicate the other. We must then choose a place to start, and this can be done using a pin or some equally arbitrary method. In addition we can choose the direction in which to read the table.

Suppose that the first two digit numbers in the table from our starting place are

12 19 20 52 81 30 74 93 02 67 41 50, etc.

If we take odd numbers for treatment A and even numbers for treatment B, then these numbers indicate the sequence

 **BABBABBABAAB**

for the first 12 subjects. Alternatively we could take each digit on its own. to give

 **ABAABBABBAABABAABBBABAAB**

for the first 24 subjects. A third approach would be to take numbers 00 to 49 for A and 50 to 99 for B, and there are countless other possible strategies. It makes no difference which is used.

We can easily generalize the last approach to situations with more than two treatments or experimental conditions. For example, we could use the following scheme for three groups:

01 to 33: treatment A

34 to 66: treatment B

67 to 99: treatment C

00 : ignored

and similarly for other designs. Notice that at any point in the sequence the numbers of patients allocated to each treatment will probably differ. We sometimes wish to keep the numbers in each group very close at all times, which we can achieve by block randomization. Further, with simple randomization the distribution of the characteristics of the subjects in each group is left completely to chance. We often know or suspect that some subjects will behave differently, for example they may have different prognoses, and so it is desirable to keep the numbers within these classes similar in the different treatment groups. We can achieve this by stratified randomization or minimization. These techniques are all described below.Clearly it is very easy to adapt the above method to give a weighted randomization, leading to unequal numbers in the different groups. For example, we could allocate treatments A and B in proportions 2 to 1 by using 01 to 66 for A and 67 to 99 for B.

Clearly it is very easy to adapt the above method to give a weighted randomization, leading to unequal numbers in the different groups. For example, we could allocate treatments A and B in proportions 2 to 1 by using 01 to 66 for A and 67 to 99 for B.


### 5.7.2 Block (or restricted) randomization

Block (or restricted) randomization is used to keep the numbers of subjects in the different groups closely balanced at all times. For example, if we consider subjects in blocks of four at a time, there are six ways in which we can allocate treatments so that two subjects get A and two get B:

1 AABB 4 BBAA 2 ABAB 5 BABA 3 ABBA 6 BAAB

If we use combinations of only these six ways of allocating treatments then the numbers in the two groups at any time can never differ by more than

two, and they will usually be the same or one apart. We choose blocks at random to create the allocation sequence. Using the previous random sequence beginning

121920528130749302674150

we can omit those numbers outside the range 1 to 6 to get

12122134326415

from which we can construct the block allocation sequence

AABB ABAB AABB ABAB ABAB AABB ABBA ABBA

and so on. Notice the apparently non- random beginning of the sequence - 121221 - in which only two of the six numbers appear. Lists of random numbers always throw up peculiar sequences like this one - they would not be random if they did not. Inspection of Table B13 shows many such sequences.

Randomized blocks can be of any size, but using a multiple of the number of treatments is more logical. Large blocks are best avoided as they control balance less well. In clinical trials it is highly desirable for the randomization sequence to be kept hidden from those actually giving the treatments. This is often achieved by creating a pile of opaque numbered sealed envelopes each containing the allocation for one patient. Even so, with the knowledge that restricted randomization is being used, it is possible to deduce in advance the treatment to be given to every fourth patient. For this reason it is better for the users of the random numbers not to know how the sequence was constructed, and it may also be desirable to vary the block length, again at random, perhaps using a mixture of blocks of size 2, 4, or 6. A similar approach is used when there are more than two treatments. For example, blocks of size 3, 6, or 9 can be used for three treatments. Obviously these considerations do not apply to experiments on animals or laboratory experiments on human samples.

There is further discussion in section 15.2 of the problems associated with treatment allocation in clinical trials.


### 5.7.3 Stratified randomization

While simple randomization removes bias from the allocation procedure, it does not guarantee, for example, that the subjects in each group have similar age distributions. Indeed in small studies it is highly likely that some chance imbalance will occur, which might complicate the interpretation of results. Even in studies with over 100 subjects there may be some substantial variations by chance, especially for characteristics that are quite rare. In many clinical studies it is known beforehand that subgroups of

patients are expected to respond differently to treatment. Here it is advisable to ensure that the subjects receiving each treatment have similar characteristics.

We can use stratified randomization to achieve approximate balance of important characteristics without sacrificing the advantages of randomization. The method is to produce a separate block randomization list for each subgroup (stratum). For example, in a study to compare two alternative treatments for breast cancer it would be important to stratify by menopausal status. Two separate lists of random numbers should be obtained, from which two separate piles of sealed envelopes can be prepared, for premenopausal and postmenopausal women. It is essential that stratified treatment allocation is based on block randomization within each stratum rather than simple randomization; otherwise there will be no control of balance of treatments within strata, and so the object of stratification will be defeated.

Stratified randomization can be extended to two or more stratifying variables. For example, we might wish to extend the stratification in the breast cancer trial to tumour size and number of positive nodes. We have to produce a separate randomization list for each combination of categories. If we had two tumour size groups (say  $\leq 4$  and  $>4 \mathrm{cm}$ ) and three groups for node involvement  $(0, 1 - 4, > 4)$  as well as menopausal status, then we have  $2 \times 3 \times 2 = 12$  strata, which may exceed the limit of what is practical. There is the further problem with multiple strata that some of the combinations of categories may be rare, so that the treatment balance expected from the use of block randomization does not occur.

Some thought should be given to which variables are used for stratification, restricting the choice to variables known to be prognostically important. Many trials stratify using age and sex. While age is frequently known to be prognostic, sex is often not prognostic and need not be used for stratification.

In a multicentre study the patients within each centre will need to be randomized separately unless there is a central coordinated randomizing service. Thus 'centre' is a stratifying variable, and there may be other stratifying variables as well.

In small studies it is not practical to stratify on more than one or perhaps two variables, as the number of strata can quickly approach the number of subjects. When it is really important to achieve close similarity between treatment groups for several variables minimization can be used (see section 5.8).


### 5.7.4 Other uses of randomization

In some studies it is either impossible or impractical to allocate treatments to individual subjects. Suppose that we wish to evaluate the effectiveness of

a health education campaign on television or in the newspapers to increase awareness of the dangers of drugs, or indeed to change behaviour. We cannot target individuals at random, but rather we can randomly assign whole areas to receive different media coverage. With a large number of small areas this cluster randomization should give reliable results, but with a small number of very large areas, as would be likely in the example given, there are problems in ensuring the comparability of the areas. Here it is valuable to obtain baseline data before the study starts so that changes within areas over the time of the study can be compared. Other clusters sometimes used in experimental research are schools, hospitals and families.

As with treatment comparisons on individuals, randomized studies on areas will give more reliable results than non- randomized studies, but randomization is often impossible. Much of the controversy over the possible association between the fluoridation of drinking water and cancer in the United States was due to the different characteristics of areas which did or did not have fluoride.

Randomization can also be used in other ways in experiments. In the arm comparison study the order in which the two observers and two cuffs were used on each arm was randomized in case there was some systematic order effect. It is a good idea to use balanced randomization in situations where there is the possibility of some systematic unwanted effect (that is, a bias). No harm will be done if it turns out that there was no such effect.

It is also advisable to use randomization in animal experiments (Gart et al., 1986). For example, if mice are to be given one of two or more different treatments it is best to select them one at a time and use a random sequence to determine the treatment. There are likely to be size differences between those animals pulled out first from the cage and those left to the end (Festing, 1981). There may also be systematic differences between animals in different cages, so that each cage should contain some animals given each treatment.

Likewise randomization has a role in laboratory experiments, such as when analysing samples that have been treated differently (e.g. by irradiation). If the samples are analysed in a continuous process, such as when using a Coulter counter to measure haemoglobin and white cell counts in samples of whole blood, then the order of analysis should preferably be randomized in relation to the differently treated samples.

In some experiments samples are analysed in batches and there are physical constraints on the number that can be dealt with in one go. It is advisable to have equal numbers of each type of sample in each batch. Further, if there is the possibility of systematic differences between the different locations, then the positions of the samples should also be randomized. For example, different types of sample can be randomly allocated to the numbered wells in a  $6 \times 6$  plate.


## 5.8 MINIMIZATION

5.8 MINIMIZATIONThe only form of allocation that is an acceptable alternative to randomization is minimization, which is a clever method of ensuring excellent balance between the groups for several prognostic factors, even in small samples. It is based on the idea that the next patient to enter the trial is given, with probability greater than 0.5, whichever treatment would minimize the overall imbalance between the groups at that stage of the trial. Often the probability is taken as 1, but a value greater than, say 0.75, should achieve much the same result with the advantages of a random component. Details of the method are given in section 15.2.3, as the technique is mainly used in clinical trials.


## 5.9 OBSERVATIONAL STUDIES

As shown in Figure 5.1, observational studies can take different forms. Many studies are carried out to investigate possible associations between various factors and the development of a particular disease or condition. Examples are studies of the relation between passive smoking and lung cancer, the use of visual display terminals and miscarriage, and alcohol consumption and suicide. There is no logical difference between comparing the outcome of two groups of patients given alternative treatments and comparing the outcome of groups receiving different exposures. In general, however, areas of epidemiological research such as those listed above are not amenable to being investigated by randomized trials. We cannot randomize individuals to smoke or not to smoke nor to work in particular jobs, and other factors such as age and race are not controllable by the individual. We must use observational studies, therefore, to study factors or exposures which cannot be controlled by the investigators. Nevertheless, as stated by Gray- Donald and Kramer (1988), 'the goal of an observational study should be to arrive at the same conclusions that would have been obtained by an experimental trial'.

There are two main types of observational study that are used to investigate causal factors - the case- control study and the cohort study. Figure 5.6 indicates the basic structure of these designs. In a retrospective case- control study a number of subjects with the disease in question (the cases) are identified along with some unaffected subjects (controls). The past history of these groups in relation to the exposure(s) of interest is then compared. In contrast, in a prospective cohort study a group of subjects is identified and followed prospectively, perhaps for many years, and their subsequent medical history recorded. The cohort may be subdivided at the outset into groups with different characteristics, or the study may be used to investigate which subjects go on to develop a particular disease. (There is also the historical cohort study, in which a past cohort is identified, and

![](../images/05_Designing_research/img6.jpg)

* Cohort Study:*

disease experience is collected prospectively

* Case-Control Study:*

past experience of cases and controls is recalled

* Cross-Sectional Study:*

past experience and current disease status are collected at the same time

Figure 5.6 Basic structure of the case- control study, the cohort study and the cross- sectional study.

their experience up to the present is obtained. Few studies like this are carried out as the necessary data are rarely available.) Also shown in Figure 5.6 is the cross- sectional study, in which subjects are investigated on one occasion only. The advantages and disadvantages of the retrospective

case- control study, the prospective cohort study and the cross- sectional study are described in the next three sections.


## 5.10 THE CASE-CONTROL STUDY

As shown in Figure 5.6, in the case- control study we identify a group of subjects (cases) with the disease or condition of interest, say lung cancer, and an unaffected group (controls), and compare their past exposure to one or more factors of interest, such as consumption of carrots. If the cases report greater exposure than the controls we may infer that exposure is causally related to the disease of interest, for example that consumption of carrots affects the risk of developing lung cancer.

The prime advantages of the case- control approach are practical: it is relatively simple, and thus quick and cheap. The case- control design is also valuable when the condition of interest is very rare. The disadvantages of this design are important, however, and relate to possible biases in the comparison of cases and controls. Sackett (1979) identified as many as 35 different biases that can occur with case- control studies; some of the main ones are described below.


### 5.10.1 Selection of controls

The main difficulty with the case- control study is the selection of an appropriate control group. If we follow the analogy with the randomized clinical trial, we want the controls to be as similar as possible to the cases, except that they do not have the disease being investigated. Obtaining such a group, however, is not straightforward. Subjects who do not have the outcome of interest may well differ in other ways from the cases, and in particular may be atypical with regard to the exposure of interest. For example, when the cases are hospital patients with a particular condition it is common to take as controls patients in the same hospital(s) with different conditions. Patients in hospital may be expected to have other conditions that are also affected by the exposure of interest. For example, in a study of lung cancer and smoking, use of hospital controls may well lead to an underestimate of the relation because many other medical conditions are related to smoking. This bias would not appear so likely in a study of lung cancer and consumption of carrots (Pisani et al., 1986), but diet may be affected by or may lead to other medical conditions.

In particular, problems can arise from different hospital admission rates among four groups: exposed and unexposed cases and exposed and unexposed controls. This bias was postulated on theoretical grounds by Berkson in 1946, but was not demonstrated empirically until 1978 (Roberts et al., 1978).

The alternative approach is to select community controls, choosing subjects from the non- hospitalized population. It is, however, not straightforward to select a representative control group from the general population, especially if, for example, a certain age and sex distribution is required.

There is also likely to be less willingness among healthy people to participate in a study than among hospital patients, which would introduce a further bias. Some studies use both hospital controls and community controls, which is a desirable approach when there is doubt about the validity of hospital controls.

One way to make the cases and controls more comparable is to match for some variables that might confuse the comparison. Matching means that each case is individually paired with a control subject. For example, for each case we might seek a control subject of the same age, sex and occupation. Matching is only useful, however, for variables that are strongly related to both the exposure and the outcome of interest. Further, it is important to appreciate that any variable used for matching cannot be investigated as a possible risk factor for the outcome. Thus if we individually match post myocardial infarct (MI) patients (cases) with non- MI controls with respect to whether or not they are vegetarian, we cannot find an association between MI and meat- eating if there is one.

For rare events, the strength of the study can be increased by having more controls than cases. Where matching is used each case can have several matched controls. For example Cuckle et al. (1986) compared the level of alpha- fetoprotein in stored serum from the umbilical cords of Down's syndrome babies and controls. For each Down's baby they took three controls matched for the baby's gestational age at delivery and duration of storage of the serum samples.


### 5.10.2 Selection of cases

The selection of controls is a major problem, but the selection of cases should also be considered carefully. While it may be reasonable to group together all diabetics, many diseases such as most cancers are heterogeneous in cause, nature and degree. The choice of cases with respect to type of disease and other factors such as age determines the degree of generalizability of results.


### 5.10.3 Recall bias

Another important source of bias is that due to differential recall by cases and controls. In many case- control studies retrospective information is obtained by interviewing the subjects. People with a particular disease or

condition may have thought a lot about a possible link with their past behaviour, especially with respect to widely publicized risk factors. For example, women having a miscarriage may be more likely to report exposure to possible hazards, such as use of a video display terminal, than women whose pregnancies went to term. Such a study may thus reflect perception of risk rather than a true risk.

Although it may not always be present (Mackenzie and Lippman, 1989), there is enormous scope for recall bias in case- control studies. In general the bias is due to under- reporting of exposure in the control group. Usually there are no records against which to check reports, but efforts should be made to evaluate and minimize the effect of recall bias.


### 5.10.4 Inaccuracy of retrospective data

In addition to biased recall of events, there is the possibility of a general inaccuracy in recalled information. Studies requiring recall of detailed dietary or smoking habits are prone to this problem, as are those requiring a precise breakdown of subjects' working history to evaluate total exposure to a hazard.

While there may be no general tendency to over- or under- estimate exposure in the recalled information from a large number of subjects, the 'noise' introduced by errors in recall do have the effect of leading to an underestimate of the association between the exposure and the outcome of interest (Breslow and Day, 1987, p. 41). There is not usually much that can be done to improve the accuracy of long- term recall data.

A related problem is that data obtained from hospital notes will suffer from incompleteness due to missing information and missing notes.


### 5.10.5 Ascertainment bias

Another form of bias can arise through a relation between the exposure and the probability of detecting the event of interest. For example, women taking the oral contraceptive pill will have more frequent cervical smears than women not on the pill, and as a consequence are more likely to have cervical cancer detected if it is present (and it is likely to be detected at an earlier stage). Thus in a case- control study comparing women with cervical cancer and a control group, an excess of pill taking among the cases may be (at least partly) due to the ascertainment bias (or detection bias) related to more frequent screening.


### 5.10.6 Comment

The problems discussed are only the most obvious difficulties associated with case- control studies. More detailed discussion can be found in

epidemiology textbooks, such as Breslow and Day (1980) and Schlesselman (1982). Case- control studies can be very valuable, but much care is needed in their planning, analysis and interpretation. The considerable scope for bias is a strong reason for seeking expert epidemiological and statistical collaboration at the planning stage. It has been suggested that many contradictory results from case- control studies of the same topic are due to the lack of adherence to rigorous scientific principles in their design (Mayes et al., 1988).

However carefully sources of bias have been excluded the observation in a case- control study of an association between an outcome and a risk factor must be interpreted with much care. Specifically, it is wrong to take such a finding as necessarily indicating a causal link. Observational studies cannot do more than suggest possible causal links - other research is needed to investigate these ideas more deeply. For example, Mattila et al. (1989) found an association between poor dental health and acute myocardial infarction. While the authors advanced a possible explanation for a causal link, the observed association might be because people with poor dental health tend to look after themselves poorly in general, for example with respect to their diet. Clearly it helps to collect information on possible confounding variables, which can be incorporated into the analysis.


## 5.11 THE COHORT STUDY

The prospective cohort study (or follow- up or longitudinal study) is the method of choice for an observational study, but there are certain difficulties with this design too. The essence of the cohort study is to identify a group of subjects of interest and then follow them up to see what happens. Because of the need to observe unaffected individuals until a fair proportion develop the outcome of interest, cohort studies can take a long time and may thus be very expensive. They are usually unsuitable for studying rare outcomes as it would be necessary to follow a huge number of subjects to get an adequate number of events.

There is usually one particular event of interest, such as death or recurrence of disease, but there may be several. There may be subgroups of subjects identified at the outset whose experience is to be compared. such as smokers and non- smokers or patients with different stages of breast cancer. Alternatively the purpose of the study may be to use the information gained to try to identify those subjects most at risk of developing the outcome of interest. For example, we could follow patients with cirrhosis of the liver, identify those developing carcinoma of the liver over, say, ten years, and compare their characteristics with those who do not get a carcinoma. Because the study is prospective the nature and quality of the data recording can be carefully controlled.

Breslow and Day (1987, pp. 15- 20) summarize the advantages of cohort

studies over case- control studies. There are some problems with cohort studies, however. Selection of the subjects to study is a common problem with all research, and is discussed below along with three problems specific to follow- up studies.


### 5.11.1 Selection of subjects

The selection of subjects to study is important in all research. In follow- up studies the probability of the event of interest occurring may be strongly related to how the sample was obtained. The issues are clearly seen in a review by Ellenberg and Nelson (1980) of published studies of the frequency of an adverse prognosis in children having a febrile seizure. They observed that such seizures occur in  $2\%$  to  $4\%$  of all young children, and as there may be harmful consequences of long- term anti- convulsant therapy it was important to quantify the risk of further seizures.

They reviewed 23 studies in which the risk of subsequent nonfebrile seizures had been ascertained. In 17 studies the children had been identified in special clinics or hospital emergency rooms. The other six had taken population samples, in which the investigators attempted to identify and follow up all children in a defined population who experienced a febrile seizure in a certain time period. It is likely that the prevalence of febrile seizures varies from one area to another, and we would expect some effect of different protocols in the different studies. Nevertheless we would expect different population- based studies to give similar results. In contrast, the clinic- based studies will inevitably be biased towards higher risk children because they will only see the more serious cases. The extent of the bias will be variable according to local referring patterns and alternative facilities. We would thus expect the clinic- based studies to show higher and more variable recurrence rates than the population based studies, and this is exactly what Ellenberg and Nelson found. The seven population- based studies obtained recurrence rates of from 1.5 to  $4.6\%$  (median  $3.0\%$ ), whereas the 17 clinic- based studies found rates between  $2.6\%$  and  $76.9\%$  (median  $16.9\%$ ). These large estimated recurrence rates had led to many children being treated prophylactically; the much smaller rates obtained in the population- based studies argued against such treatment.

Similar differences in outcome in relation to sample selection would be likely in follow- up studies of other medical conditions. In some cases, however, studying attenders at special clinics may give an optimistic picture. Examples are cystic fibrosis in newborn babies and myocardial infarction, for both of which some cases will not live long enough to be able to attend a clinic. Population samples are difficult and expensive to carry out, but studies of highly selected subjects may well give misleading results, especially regarding the natural history of disease.

### 5.11.2 Loss to follow-up

The main difficulty specifically encountered in cohort studies is that some subjects will not be followed up for the full length of the study. They may move to another area or lose interest, or they may even die. The longer the study, the more subjects will be lost. Losses to follow- up reduce the numbers supplying information, and thus weaken the analysis slightly. The main worry, however, is that subjects are lost to follow- up for some reason that is related to the outcomes being studied or to pre- defined risk categories. There is a considerable risk of this type of bias, and so strenuous efforts are needed to try to contact as many people as possible. Some losses are inevitable, and it is useful to compare the characteristics of these subjects on entry to the study with those with whom contact is maintained.

Even with a short follow- up period there will be losses for various reasons, some of which might be related to the aim of the research. Martin and Bracken (1987) identified 6219 pregnant women in New Haven for possible inclusion in a study to investigate the relation between maternal caffeine consumption and birth weight. Of these, 5331 women agreed to be contacted, and 4926 were eligible for the study. The number yielding data for the main analysis was reduced to 3858, with the following reasons for exclusion:

4926 eligible and willing to be in study

473 refused to be interviewed

263 could not be reached

4 unreliable interviews

4186 valid interviews obtained

76 pregnancy outcome not ascertained

56 delivered at a different hospital

116 not a live birth

46 not singleton deliveries

33 birth weight not recorded

3858 caffeine consumption and birth weight obtained.

This study illustrates the wide range of reasons for incomplete follow- up. It may not seem likely that any of these reasons for loss to follow- up would have been related to either caffeine consumption or birth weight to an important degree, but the possibility of bias should always be considered.

In studies carried out over many years large numbers of subjects may be lost, especially in highly mobile populations, severely weakening the reliability of the results. Non- response to postal questionnaires is particularly common. If the outcome of interest is death, however, national registers can provide information about subjects who have not maintained contact. Similarly, in some countries disease registers allow virtually complete follow- up. For example, in a study of all Swedish conscripts in

1969- 70, registers were used to identify both admissions for psychiatric care and deaths (Andréasson et al., 1987).

### 5.11.3 Other problems

Long- term studies may suffer from problems associated with change in habits. For example, people may change jobs (and hence exposure to risk) or become unemployed, or may change the consumption of cigarettes, alcohol or specific items of food. It is, though, a strength of the cohort study that repeated assessments of risk status can be made.

Perhaps a more serious problem is that different groups may not be investigated equally closely. In particular a high risk group may be studied more carefully, resulting in advantageous earlier detection of medical problems. Conversely, intensive investigation of the high risk group may lead to the greater discovery of conditions that are actually equally common in the low risk group. Surveillance bias is eliminated when all subjects are investigated identically, preferably with the assessors being unaware of each person's risk status.

## 5.12 THE CROSS-SECTIONAL STUDY

In a cohort study subjects with different characteristics are identified and followed to see what happens. By contrast, in a cross- sectional study all the information is collected at the same time because subjects are only contacted once. Many cross- sectional studies are descriptive, and these are often called surveys. For example, we might ask undergraduates about their alcohol consumption, carry out a survey of the use of alternative medicine in a particular area, or investigate the ability of a particular blood test to give a correct 'diagnosis' in inpatients with certain symptoms.

Some cross- sectional studies are, however, carried out to investigate associations between a disease and possible risk factors, so that this design is an alternative to the case- control and cohort approaches. The cross- sectional study does not suffer from many of the difficulties that affect these other designs, such as recall bias and loss to follow- up. It is relatively cheap and easy to carry out. Needless to say, there are different special problems associated with cross- sectional studies.

### 5.12.1 Sample selection

Cross- sectional studies share the problems of sample selection with cohort studies. Although research is carried out on a limited number of individuals, the interpretation of results is usually extended widely. A survey of GP referral practices or health education in one county will probably be taken as an indication of what happens nationally. However, the nature of

hospital inpatients, clinic attenders, general practice attenders and those not attending anywhere may vary enormously. Apart from affecting the observed prevalence of a disorder, the choice of sample may have a strong effect on the observed relation with other factors. Clearly, the validity of the extrapolation depends crucially on the representativeness of the sample. It is an inherent weakness of most observational studies that the sample is not representative of the population. In some cases, however, we can select a random sample for a survey, which is the ideal method.

### 5.12.2 Response rates

Many cross- sectional studies obtain all or most of their information from postal questionnaires. Non- response can be a big problem, with perhaps only  $50\%$  to  $80\%$  of questionnaires being returned. Many studies have found that there are marked differences (demographic and health- related) between those who do or do not respond to a questionnaire, with the non- responders usually being less healthy. This is sometimes known as volunteer bias. If some information is available for non- responders - perhaps basic demographic details - it is valuable to assess whether there are any apparent differences between responders and non- responders. Similar age and sex distributions will not, however, necessarily indicate a lack of bias.

For example, in a health status survey of elderly people the response rate was age related, being highest in those aged 85 and over  $(84\%)$  and lowest in those aged 65 to 74  $(74\%)$  (Rockwood et al., 1989). However, non- responders were found to spend more time in hospital than responders, and this difference was most marked in the oldest group.

In any study strenuous efforts should be made to get as high a response rate as possible. For example, in studies collecting data by postal questionnaire it is common to have second and third mailings for those who do not respond to the first letter.

### 5.12.3 Cause or effect?

The particular difficulty associated with cross- sectional studies looking at associations with disease concerns the sequence in time of the disorder of interest and the possible risk factor. For example, if we were to carry out a study of the relation between employment status and health we would probably find that the unemployed have worse health than those in employment. We might conclude that being unemployed leads to poorer health, but an equally valid possibility is that poor health leads to being unemployed, or both statements might be true. Because we have collected both sets of information at the same time we cannot draw a clear inference of causality. Similar situations arise in many circumstances where either the

disorder develops slowly or the exposure is long- term (or both). Some case- control studies suffer from the same weakness. A prospective study is the best way to investigate such questions.

## 5.13 STUDIES OF CHANGE OVER TIME

The last type of study design considered in this chapter is that in which two or more independent sets of cross- sectional data are used to make inferences about changes over time. Two situations where this design is used will illustrate many of the difficulties.

The first example is in the study of growth patterns when it is not possible to take many measurements from each individual. For example, ultrasound measurements of the fetus are now routine in many hospitals, and it is important to know the usual variability of the various measurements of fetal size such as head circumference. Many such studies have been performed. Apart from the usual problem of sample selection these studies often include variable numbers of measurements from different fetuses. Most pregnant women have just a single ultrasound scan at about 15- 20 weeks of gestation. Repeat scans are usually performed only if there is some reason for clinical concern, such as apparently poor growth. Inclusion of such data will therefore bias the sample towards these fetuses, which will particularly affect data in the second half of pregnancy. A further problem is that data collected in this way are usually plotted and the line joining the means at each week of gestation is taken as the average 'growth curve'. The means do not, however, indicate average growth but average size; by definition we need measurements of each fetus on two or more occasions in order to study growth. We cannot make valid inferences about growth from single measurements of size; we cannot create a longitudinal study from cross- sectional data.

The same applies when we consider populations rather than individuals, and further problems arise when we are concerned with a possible causal relation. For example, the change in the death rate from motoring accidents has been compared in several countries for the periods before and after the introduction of seat- belt legislation. The inference of such studies is that any reduction in the death rate is due to the introduction of seat- belts, but there may have been other differences between the two time periods, such as a reduction in drinking and driving. The problem is seen more clearly when data for many time periods are examined. Data from 1950 to 1984 show a steady rise in the average daily prison population and a fall in the number of patients in psychiatric beds. This was interpreted as a causal link, with discharged long- stay psychiatric patients ending up in prison (Weller and Weller, 1986). However, any two quantities changing over time will show a statistical association, such as the price of beer and the salaries of priests (Gibbons and Davis, 1984) or the proportion of

unmarried mothers and the rate of Caesarean section. Association is not necessarily causation; very careful statistical analysis of such data is required.

## 5.14 CHOOSING A STUDY DESIGN

The choice between an experiment and an observational study is usually straightforward. If it is possible, both ethically and logistically, to carry out an experiment, then this is the preferred approach. In particular, the evaluation of alternative treatments is best addressed by a randomized controlled trial (see Chapter 15). Most studies are not experiments. A review of papers published in the New England Journal of Medicine in 1978- 79 found that only 90 of 332 original articles were controlled experiments (Bailar et al., 1984), and the proportion is probably unusually high in that journal. The majority of the remainder were observational studies, and most of those were cross- sectional studies. The previous sections have discussed the advantages and (especially) the disadvantages of case- control, cohort and cross- sectional studies. All have their weak points, although the prospective cohort study is usually the best bet if feasible.

The large number of possible biases in observational studies can lead to considerable variation in the findings from similar studies of the same phenomenon. This is seen in the regular series of scares about an increased risk of cancer associated with high consumption of coffee, beer, tea, sweeteners, and so on. Feinstein (1988) argued that much of the confusion can be attributed to the failure to develop adequate scientific standards for observational epidemiological studies. Lichtenstein et al. (1987) gave guidelines for reading reports of case- control studies.

The choice of the most appropriate design is not easy, as there are many considerations to weigh up. The involvement of a statistician at the planning stage is strongly recommended. As well as advising on the choice of design, they can give valuable assistance regarding the selection of suitable samples of individuals for study, a problem that must be confronted with any study design but is especially important in observational studies. The statistician can (and should) also advise on the appropriate sample size. Chapter 15 describes sample size calculations for clinical trials; similar methods are available for observational studies.

A recurring theme in this and later chapters is the considerable gulf between an observed association and inference of a causal mechanism. Only in randomized trials and other experiments can we reasonably ascribe an observed effect to be causal, because of the controlled nature of the investigation. (But Chapter 15 describes some of the possible problems that can arise in clinical trials.) When planning an observational study it is important to bear in mind the information that will be obtained, and how

easily the results will be able to be interpreted. In observational studies the interpretation of observed associations needs great care. For example, the study of Swedish conscripts found a strong association between cannabis consumption and subsequent schizophrenia (Andréasson et al., 1987). The authors of the report were very careful, however, to consider whether the relation was causal or not. In particular they considered, but cautiously rejected, the possibility that cannabis consumption might be caused by emerging schizophrenia. The study of longevity and left- handedness referred to in section 1.1 is a contrasting example (Halpern and Coren, 1988). Although the authors acknowledged that the observed small reduction in longevity of left- handers is not necessarily causal, they did not consider the possibility of bias as an explanation. Their finding could well be explained by having analysed age at death, ignoring those still alive, for baseball players born over a long period during which the prevalence of left- handedness would have risen through changes in social attitudes. Those left- handers who died would thus be expected to have died younger than right- handers who had died. (The correct way to analyse this type of data is described in Chapter 13. )

This chapter has introduced various issues in the design of research, but is by no means comprehensive. Lengthier discussion can be found in Gehlbach (1982) for a general discussion of design issues, Pocock (1983) for clinical trials, Breslow and Day (1980) or Schlesselman (1982) for case- control studies, and Breslow and Day (1987) for cohort studies.

## EXERCISES

5.1 In 1978- 79 a random sample of 1007 residents (608 men and 399 women) of the Lothian region (around Edinburgh) had been asked precisely what alcohol they had drunk in the previous seven days. In March 1981 the combination of an increase in taxation and brewers' prices meant that, for the first time in over 30 years, the price of alcoholic beverages increased faster than the retail price index. So in the autumn of 1981 the 676 respondents (484 men and 192 women) who had had at least one alcoholic drink in the seven days on which the original survey had been based - the so- called 'regular drinkers' - were reinterviewed.

The first survey was carried out between July 1978 and February 1979 and the second between September 1981 and March 1982. Over the three years, the cost of alcoholic beverages had risen by  $61\%$  while the retail price index had risen by  $52\%$ . Average earnings (and disposable income) had risen more than the retail price index, suggesting that those in regular employment were marginally better off than in 1981. Unemployment in the Edinburgh area, however, had risen steeply between 1978 and 1982 for both men and women.

The results of the second survey were reported as follows:

'Of the original 676 regular drinkers, 463  $(69\%)$  were successfully interviewed. Of the 213 who were not, 85 could not be traced, 48 were known to have left the region, 39 refused, and 23 were either dead or too ill to be interviewed. A disproportionate number of lost respondents were under the age of 30, unmarried, and not in regular employment. Nevertheless, the sex ratio and both male and female alcohol consumption at the time of the first survey of the 463 who were reinterviewed were representative of the original sample.' (Kendell et al., 1983).

(a) The authors were interested in reduction in alcohol intake, and so did not interview those subjects not reporting drinking in the first survey. Is this reasonable? 
(b) What was the response rate to the second survey? How might non-respondents differ from respondents? What is the likely effect on the interpretation of the results of the survey? 
(c) Does it matter that the two surveys were not carried out at exactly the same time of year? 
(d) If the data showed a reduction in alcohol consumption among the 463 reinterviewed subjects, could the authors reasonably conclude that it was due to the rise in excise duty on alcohol?

The Discussion of the paper begins:

'The central finding of this before and after survey is that a representative population of 463 regular drinkers in the Lothian region reduced their alcohol consumption by  $18\%$  between 1978- 9 and 1981- 2 and simultaneously experienced a  $16\%$  reduction in adverse effects. The main cause of this fall in consumption was probably the rising cost of alcoholic beverage relative to the cost of living and average incomes during that three year period.'

(e) Were the 463 'regular drinkers' really a 'representative population'? 
(f) Comment on the authors' interpretation of the results. Would your opinion be different if they had interviewed all 1007 subjects in the second survey?

In the final paragraph the authors wrote:

'The findings of this study indicate, therefore, that an increase in excise duty on alcoholic beverages can be an effective means of reducing the ill effects of excessive alcohol consumption.'

(g) Do these conclusions have any validity?

5.2 A researcher wished to see if women who have taken the oral contraceptive pill have an earlier or later menopause than other women. He decided to study a group of women born in 1930 as these would be young enough for some to have taken the pill but old enough for some to have reached the menopause. He obtained the names of all 132 women in one general practice who were born in 1930, using the practice's age- sex register. Women claiming to have had the menopause were checked by measuring their follicle stimulating hormone (FSH) levels.Of the 132 women, 101 were excluded from the study for the following reasons:

Of the 132 women, 101 were excluded from the study for the following reasons:

22 not available (21 not contactable, 1 refusal) 60 premenopausal 14 hysterectomy 1 radium- induced menopause 2 unmarried 2  $\mathrm{FSH}< 30\mathrm{IU} / \mathrm{l}$

(a) What was the design of this study?

(b) Is the sample of 31 women representative of the population of interest?

The researcher found that 12 of the 31 women had taken the oral contraceptive pill at some time, while 19 had not. He obtained the following results relating to age at menopause in the two groups, and concluded that taking the pill does not delay the menopause:

<table><tr><td rowspan="2"></td><td rowspan="2">n</td><td colspan="2">Age at menopause (years)</td></tr><tr><td>Mean</td><td>SD</td></tr><tr><td>Pill users</td><td>12</td><td>47.2</td><td>2.1</td></tr><tr><td>Non pill users</td><td>19</td><td>47.5</td><td>2.1</td></tr></table>

(c) What was the fundamental error in the design of this study? 
(d) What design is needed to answer the question originally posed?

(This exercise is based on a frank account of a flawed research project by Davis, 1985. )

5.3 Halpern and Coren (1988) wished to see if there was a difference in longevity between left- handed and right- handed people. One of the few sources of handedness of individuals is a baseball encyclopaedia. From an encyclopaedia they recorded the dates of birth and death of 1472 right- handed and 236 left- handed players.

(a) Was this a representative sample of the population?

(b) The authors did not state the time span of the data, but as they note deaths up to age 99 it is likely to cover the whole of the twentieth century. How might the long time span bias the comparison of left- and right-handers?

(c) They compared the mean age at death in the two groups. Why is this a misleading comparison?

(d) What would be a better design to answer this question, assuming that handedness data were more widely available?
