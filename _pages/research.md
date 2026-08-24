---
title: "Research"
permalink: /research/
layout: single
author_profile: false
classes: wide
---

SMILab develops physics-informed and function-preserving artificial intelligence (AI) methods for quantitative nuclear medicine and medical image analysis. We investigate how physiologically meaningful imaging information is affected by limited photon counts, motion, temporal variation, and imperfect acquisition, and how such information can be reliably restored, represented, and quantified using AI.

Our nuclear medicine research spans three representative functional imaging scenarios, including myocardial perfusion imaging, dynamic renal scintigraphy, and cross-timepoint PET imaging. These studies progressively address the preservation of spatial functional information, the quantitative characterization of dynamic renal function, and the prediction of metabolic changes across different imaging time points.

<strong>Low-count myocardial perfusion SPECT imaging</strong>    
Our research investigates how limited photon counts, cardiac motion, and temporal gating jointly affect myocardial perfusion SPECT. We develop learning-based methods to reduce image noise and motion-related degradation while preserving myocardial uptake, spatial resolution, perfusion patterns, and gated functional information.
- Develop deep learning methods for low-dose and shortened-acquisition myocardial perfusion SPECT restoration and quantitative recovery.[(Sun et al. QIMS 2022)](https://pmc.ncbi.nlm.nih.gov/articles/PMC9246746/) [(Sun et al. J. Nucl. Cardiol. 2023)](https://link.springer.com/article/10.1007/s12350-022-03045-x) [(Sun et al. SNMMI 2023)](https://jnm.snmjournals.org/content/64/supplement_1/P807.abstract)  
- Develop generalised and diffusion-based models for efficient MP-SPECT restoration across different acquisition and count conditions.[(Li et al. EJNMMI Phy. 2026)](https://link.springer.com/content/pdf/10.1186/s40658-025-00825-5.pdf) [(Li et al. SNMMI 2025)](https://jnm.snmjournals.org/content/66/supplement_1/251714.abstract) [(Sun et al. SNMMI 2025)](https://jnm.snmjournals.org/content/66/supplement_1/251558.abstract)  
- Develop motion-aware learning methods for cardiac-gated MP-SPECT denoising, deblurring, motion-artifact reduction, and temporal restoration.[(Sun et al. IEEE NSS/MIC 2019)](https://ieeexplore.ieee.org/abstract/document/9059884/) [(Sun et al. Med. Phys. 2022)](https://aapm.onlinelibrary.wiley.com/doi/abs/10.1002/mp.15707) [(Li et al. IEEE NSS/MIC Oral 2025)](https://ieeexplore.ieee.org/document/11287736) [(Liu et al. IEEE TRPMS 2026)](https://ieeexplore.ieee.org/abstract/document/11489069) [(Li et al. SNMMI 2026)](https://jnm.snmjournals.org/content/67/supplement_1/261789.abstract)
- Investigate patient-specific, resource-efficient, and distributed learning strategies for robust MP-SPECT restoration and quantitative imaging.[(Sun et al. IEEE NSS/MIC Oral 2022)](https://ieeexplore.ieee.org/abstract/document/10399080) [(Sun et al. Front. Med. 2023)](https://www.frontiersin.org/journals/medicine/articles/10.3389/fmed.2023.1083413/full) [(Dong et al. IEEE NSS/MIC 2025)](https://ieeexplore.ieee.org/document/11287664) (Li et al. IEEE NSS/MIC 2026)


<strong>Dynamic renal scintigraphy and renal function quantification</strong>   
Our research investigates how renal tracer uptake, transport, and clearance can be characterized directly from dynamic renal scintigraphy sequences and translated into quantitative renal functional measurements. We aim to reduce dependence on manually defined regions of interest (ROI) and make better use of the spatial and temporal information contained in the complete dynamic sequence.
- Develop ROI-free dynamic [99mTc]Tc-DTPA renography models for Gates-derived total and split renal function estimation.[(Xu et al. SNMMI Oral 2026)](https://jnm.snmjournals.org/content/67/supplement_1/261764.abstract)
- Develop GFR-based renal function stratification and hierarchical severity modeling for quantitative assessment of renal function.(Xu et al. IEEE NSS/MIC 2026)
- Investigate TAC-based and ROI-based functional representations for residual calibration of image-derived GFR estimates.(Zhu et al. IEEE NSS/MIC 2026)
- Develop quality assessment and acquisition-integrity methods for complete dynamic renal scintigraphy sequences to support reliable downstream functional quantification.


<strong>Cross-timepoint PET imaging and metabolic evolution prediction</strong>  
Our research investigates quantitative metabolic changes between different PET imaging time points. We focus on separating true biological changes in tracer uptake from acquisition-related variation caused by imperfect inter-scan alignment, variable scan intervals, and differences in imaging conditions.
- Develop learning-based methods for predicting delayed PET images from early PET and CT under imperfect inter-scan correspondence. (Sun et al. IEEE NSS/MIC 2026)
- Develop scan-interval-aware and residual metabolic change modeling strategies for cross-timepoint PET prediction


<strong>Related medical image analysis</strong>  
Beyond the core nuclear medicine research, SMILab also develops AI methods for medical image synthesis, quantitative image analysis, personalized imaging, and image quality assessment.
- Develop region-aware MRI-to-sCT synthesis methods for radiotherapy-oriented imaging in nasopharyngeal carcinoma. (Wang et al. IEEE NSS/MIC 2026)  
- Develop personalized cardiac image segmentation models incorporating patient-specific attributes for quantitative echocardiographic analysis. [(Dong et al. Med. Phys. 2026)](https://aapm.onlinelibrary.wiley.com/doi/abs/10.1002/mp.70235)
- Investigate patient-as-reference and longitudinal learning strategies for medical image quality assessment and quantitative imaging.  
