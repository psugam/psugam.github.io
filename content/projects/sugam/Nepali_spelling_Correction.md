---
title: "Nepali Spelling Correction Using Transformer Models"
date: 2024-02-06
description: "A deep learning-based Nepali spelling correction system using transformer models."
tags: ["NLP", "Machine Learning", "Deep Learning", "Transformers"]
image: "https://upload.wikimedia.org/wikipedia/commons/9/98/Nepali_Language_Script.png"
---

## Nepali Spelling Correction Using Transformer Models

### Introduction
Nepali, being a low-resource language, lacks robust spelling correction tools. This project leverages transformer-based sequence-to-sequence models to build an accurate Nepali spelling correction system. 

### Summary
This project explores the effectiveness of transfer learning for Nepali spelling correction by fine-tuning transformer-based models. It compares three distinct models: Varta-T5, mT5-small, and mBART. The dataset is prepared using pseudo-random synthetic error generation techniques from a large-scale Nepali text corpus. The results demonstrate the strengths and weaknesses of each model in different domains, highlighting mT5-small's superior domain-specific accuracy and mBART's generalization ability.

### Features
- Fine-tuned transformer models for Nepali spelling correction
- Synthetic dataset generation for training and evaluation
- Performance comparison of multiple transformer architectures
- Deployed via HuggingFace for easy inference

### Repository
[GitHub - Nepali Spelling Correction](https://github.com/psugam/nepali_spell_correction)
