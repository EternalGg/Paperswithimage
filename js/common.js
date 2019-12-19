var paper = [
      {
        "-id": "1",
        "image": "architecture.png",
        "name": "CodeSearchNet挑战：评估语义代码搜索的状态",
        "time": "2019年9月20日",
        "anthor": "Hamel Husain ? Ho-Hsiang Wu ? Tiferet Gazit ? Miltiadis Allamanis ? Marc Brockschmidt",
        "detail": "语义代码搜索是在给定自然语言查询的情况下检索相关代码的任务。尽管与其他信息检索任务有关，但它需要弥合代码中使用的语言（通常是缩写和高度技术性）与更适合描述模糊概念和思想的自然语言之间的鸿沟。 为了评估代码搜索的进度，我们发布了CodeSearchNet语料库，并提出了CodeSearchNet质询，其中包括99种自然语言查询，以及大约4k专家相关性注释，这些注释可能来自CodeSearchNet语料库。",
        "pdf": "https://arxiv.org/pdf/1603.04467v2.pdf",
        "git_hub": "https://github.com/github/CodeSearchNet",
        "briges": "tensorflow",
        "type": "NLP",
        "task1": "CODE SEARCH",
        "task2": "INFORMATION RETRIEVAL",
        "tip": "30"
      },
      {
        "-id": "2",
        "image": "TensorFlow.png",
        "name": "TensorFlow：异构分布式系统上的大规模机器学习",
        "time": "2016年3月14日",
        "anthor": "Martín Abadi ? Ashish Agarwal ? Paul Barham ? Eugene Brevdo ? Zhifeng Chen ? Craig Citro ? Greg S. Corrado ? Andy Davis ? Jeffrey Dean ? Matthieu Devin ? Sanjay Ghemawat ? Ian Goodfellow ? Andrew Harp ? Geoffrey Irving ? Michael Isard ? Yangqing Jia ? Rafal Jozefowicz ? Lukasz Kaiser ? Manjunath Kudlur ? Josh Levenberg ? Dan Mane ? Rajat Monga ? Sherry Moore ? Derek Murray ? Chris Olah ? Mike Schuster ? Jonathon Shlens ? Benoit Steiner ? Ilya Sutskever ? Kunal Talwar ? Paul Tucker ? Vincent Vanhoucke ? Vijay Vasudevan ? Fernanda Viegas ? Oriol Vinyals ? Pete Warden ? Martin Wattenberg ? Martin Wicke ? Yuan Yu ? Xiaoqiang Zheng",
        "detail": "TensorFlow是用于表达机器学习算法的接口，也是用于执行此类算法的实现。使用TensorFlow表示的计算可以在多种异构系统上执行很少或没有任何更改，范围从移动设备（如手机和平板电脑）到大型分布式系统（包括数百台机器和数千个计算设备，例如GPU卡） 。 计算机科学和其他领域，包括语音识别，计算机视觉，机器人技术，信息检索，自然语言处理，地理信息提取和计算药物发现。",
        "pdf": "https://arxiv.org/pdf/1603.04467v2.pdf",
        "git_hub": "https://github.com/tensorflow/tensorflow",
        "briges": "tensorflow",
        "type": "ML",
        "task1": "DIMENSIONALITY REDUCTION",
        "task2": "Machineleaning",
        "tip": "31"
      },
      {
        "-id": "3",
        "image": "open.png",
        "name": "单网络全身姿势估计",
        "time": "2019年9月30日",
        "anthor": "Gines Hidalgo ? Yaadhav Raaj ? Haroon Idrees ? Donglai Xiang ? Hanbyul Joo ? Tomas Simon ? Yaser Sheikh",
        "detail": "我们提出了第一种用于2D?全身姿势估计的单网络方法，该方法需要同时定位身体，面部，手和脚的关键点。由于采用了自下而上的公式，因此无论图像中有多少人，我们的方法都能保持恒定的实时性能。 通过改进的体系结构可以处理身体/脚和面部/手关键点之间的比例差异，使用多任务学习在单个阶段对网络进行培训。我们的方法大大改进了，这是迄今为止在速度和全局精度方面唯一能够进行全身姿势估计的工作。",
        "pdf": "https://arxiv.org/pdf/1909.13423v1.pdf",
        "git_hub": "https://paperswithcode.com/paper/single-network-whole-body-pose-estimation#code",
        "briges": "null",
        "type": "CV",
        "task1": "MULTI-TASK LEARNING",
        "task2": "POSE ESTIMATION",
        "tip": "31"
      },
      {
        "-id": "4",
        "image": "68747470733a2f2f7472616e73666f726d65722e68756767696e67666163652e636f2f66726f6e742f6173736574732f7468756d626e61696c2d6c617267652e706e67.png",
        "name": "TensorFlow 2.0和PyTorch的最新自然语言处理",
        "time": "2019年7月26日",
        "anthor": "too more",
        "detail": "Transformers（以前称为pytorch-transformers和pytorch-pretrained-bert）提供用于自然语言理解（NLU）和自然语言生成（NLG）的最新通用架构（BERT，GPT-2，RoBERTa，XLM，DistilBert，XLNet ...） ）包含超过32种以100多种语言编写的预训练模型，以及TensorFlow 2.0和PyTorch之间的深层互操作性。",
        "pdf": "https://arxiv.org/pdf/1901.02860v3.pdf",
        "git_hub": "https://github.com/huggingface/pytorch-transformers",
        "briges": "tensorflow",
        "type": "NLP",
        "task1": "NLP",
        "task2": "LANGUAGE MODELLING",
        "tip": "32"
      },
      {
        "-id": "5",
        "image": "TensorFlow.png",
        "name": "scikit-learn：Python中的机器学习",
        "time": "2012年1月2日",
        "anthor": "Fabian Pedregosa ? Ga?l Varoquaux ? Alexandre Gramfort ? Vincent Michel ? Bertrand Thirion ? Olivier Grisel ? Mathieu Blondel ? Andreas Müller ? Joel Nothman ? Gilles Louppe ? Peter Prettenhofer ? Ron Weiss ? Vincent Dubourg ? Jake Vanderplas ? Alexandre Passos ? David Cournapeau ? Matthieu Brucher ? Matthieu Perrot ? ?douard Duchesnay",
        "detail": "scikit-learn是一个基于SciPy的Python机器学习模块，并以3条款BSD许可分发。 该项目由David Cournapeau于2007年启动，当时是Google Summer of Code项目，此后许多志愿者做出了贡献。有关核心贡献者的列表，请参阅关于我们页面。 目前由一组志愿者维护。 网站：http：//scikit-learn.org",
        "pdf": "https://arxiv.org/pdf/1201.0490v4.pdf",
        "git_hub": "https://paperswithcode.com/paper/scikit-learn-machine-learning-in-python#code",
        "briges": "none",
        "type": "ML",
        "task1": "DIMENSIONALITY REDUCTION",
        "task2": "MODEL SELECTION",
        "tip": "33"
      },
      {
        "-id": "6",
        "image": "33823288584_1d21cf0a26_k_example_output.jpg",
        "name": "Detectron",
        "time": "ECCV 2018",
        "anthor": "too more",
        "detail": "Detectron是Facebook AI Research的软件系统，它实现了包括Mask R-CNN在内的最新对象检测算法。它是用Python编写的，并由Caffe2深度学习框架提供支持。 在FAIR上，Detectron开展了许多研究项目，包括：用于对象检测的功能金字塔网络，Mask R-CNN，检测和识别人与对象的交互作用，用于密集对象检测的焦点损失，非局部神经网络，学习分割所有事物，数据蒸馏：面向全监督学习，DensePose：在野外进行密集的人体姿势估计和组归一化。",
        "pdf": "https://arxiv.org/pdf/1901.07518v2.pdf",
        "git_hub": "https://github.com/facebookresearch/detectron",
        "briges": "pytorch",
        "type": "CV",
        "task1": "OBJECT DETECTION",
        "task2": "VIDEO CLASSIFICATION",
        "tip": "30"
      },
      {
        "-id": "7",
		"image":"htc.png",
        "name": "Hybrid Task Cascade for Instance Segmentation",
        "time": "CVPR 2019",
        "anthor": "Kai Chen ? Jiangmiao Pang ? Jiaqi Wang ? Yu Xiong ? Xiaoxiao Li ? Shuyang Sun ? Wansen Feng ? Ziwei Liu ? Jianping Shi ? Wanli Ouyang ? Chen Change Loy ? Dahua Lin",
        "detail": "Cascade是一种经典而强大的体系结构，可以提高各种任务的性能。但是，如何将级联引入实例分割仍然是一个悬而未决的问题。 级联R-CNN和Mask R-CNN的简单组合只会带来有限的增益。在探索更有效的方法时，我们发现成功进行实例细分级联的关键是充分利用检测与细分之间的相互关系。在这项工作中，我们提出了一个新的框架，混合任务级联（HTC），它在两个重要方面有所不同：（1）与其对这两个任务分别进行级联优化，不如将它们交织在一起以进行联合的多阶段处理；（2）它采用完全卷积的分支来提供空间上下文，这有助于区分硬前景和杂乱背景。总体而言，该框架可以逐步学习更多歧视性特征，同时在每个阶段将互补性特征整合在一起。不计其数，单个HTC可获得38.4和1。与MSCOCO数据集上强大的Cascade Mask R-CNN基线相比，有5个改进。此外，我们的整体系统在测试挑战拆分中达到了48.6的面具AP，在COCO 2018挑战对象检测任务中排名第一。可以从以下网址获得代码：https：//github.com/open-mmlab/mmdetection。",
        "pdf": "https://arxiv.org/pdf/1901.07518v2.pdf",
        "git_hub": "https://arxiv.org/abs/1901.07518v2",
        "briges": "pytorch",
        "type": "CV",
        "task1": "INSTANCE SEGMENTATION",
        "task2": "OBJECT DETECTION",
        "tip": "34"
      }
    ];
function creat_row() {
    type = window.location.search;
    for (var i = 1; i < paper.length; i++) {
        var newDiv = document.createElement("div");
        newDiv.className="row";
        newDiv.innerHTML = '<ul class="row_img">'+
            '<div class="p_div">'+
            '<img class="picture" src="../data/'+paper[i].image+'">'+
            '</div>'+
            '</ul>' +
            '<ul class="row_detail">'+
            '<ul>'+
            '<a href=paper.html'+type +'?'+i+
            ' class="title">'+paper[i].name+'</a>'+
            '<div class="complexity">'+paper[i].time+'</div>'+
            '<div class="detail">' +paper[i].detail+
            '</div>' +
            '<div class="target">'+
            '<a class="task">'+paper[i].task1+'</a>'+
            '<a class="task">'+paper[i].task2+'</a>'+
            '</div>'+
            '</ul>'+
            '</ul>'+
        '<ul class="row_performance">' +
            '<div class="gdiv" ><a class="github" href="'+ paper[i].git_hub+'">code</a></div>' +
            '<div class="pdiv" ><a class="paper" href="'+ paper[i].pdf+'">paper</a></div>' +
            '</ul>';
        document.getElementById("mid_center").appendChild(newDiv);
    }
}

function changetype(type,clas) {
    document.getElementById('state').innerHTML = type;
    if (clas=='new'){
        document.getElementById('new').style.cssText = "color:Green;";
        document.getElementById('trend').style.cssText = "color:Black;";
        document.getElementById('porp').style.cssText = "color:Black;";
    }
    if (clas=='trend'){
        document.getElementById('new').style.cssText = "color:Black;";
        document.getElementById('trend').style.cssText = "color:Green;";
        document.getElementById('porp').style.cssText = "color:Black;";
    }
    if (clas=='porp'){
        document.getElementById('new').style.cssText = "color:Black;";
        document.getElementById('trend').style.cssText = "color:Black;";
        document.getElementById('porp').style.cssText = "color:Green;";
    }
}

function showkid(fid,kid) {
    if (fid=='fcv'){
        document.getElementById('fcv').style.cssText = "color:Green;";
        document.getElementById('fnlp').style.cssText = "color:Black;";
        document.getElementById('frl').style.cssText = "color:Black;";
        document.getElementById('fMedical').style.cssText = "color:Black;";
        document.getElementById('frobot').style.cssText = "color:Black;";
        document.getElementById('CV').style.display = 'inline';
        document.getElementById('NLP').style.display = 'none';
        document.getElementById('RL').style.display = 'none';
        document.getElementById('Medical').style.display = 'none';
        document.getElementById('robot').style.display = 'none';

    }
    if (fid=='fnlp'){
        document.getElementById('fcv').style.cssText = "color:Black;";
        document.getElementById('fnlp').style.cssText = "color:Green;";
        document.getElementById('frl').style.cssText = "color:Black;";
        document.getElementById('fMedical').style.cssText = "color:Black;";
        document.getElementById('frobot').style.cssText = "color:Black;";
        document.getElementById('CV').style.display = 'none';
        document.getElementById('NLP').style.display = 'inline';
        document.getElementById('RL').style.display = 'none';
        document.getElementById('Medical').style.display = 'none';
        document.getElementById('robot').style.display = 'none';
    }
    if (fid=='frl'){
        document.getElementById('fcv').style.cssText = "color:Black;";
        document.getElementById('fnlp').style.cssText = "color:Black;";
        document.getElementById('frl').style.cssText = "color:Green;";
        document.getElementById('fMedical').style.cssText = "color:Black;";
        document.getElementById('frobot').style.cssText = "color:Black;";
        document.getElementById('CV').style.display = 'none';
        document.getElementById('NLP').style.display = 'none';
        document.getElementById('RL').style.display = 'inline';
        document.getElementById('Medical').style.display = 'none';
        document.getElementById('robot').style.display = 'none';
    }
    if (fid=='fMedical'){
        document.getElementById('fcv').style.cssText = "color:Black;";
        document.getElementById('fnlp').style.cssText = "color:Black;";
        document.getElementById('frl').style.cssText = "color:Black;";
        document.getElementById('fMedical').style.cssText = "color:Green;";
        document.getElementById('frobot').style.cssText = "color:Black;";
        document.getElementById('CV').style.display = 'none';
        document.getElementById('NLP').style.display = 'none';
        document.getElementById('RL').style.display = 'none';
        document.getElementById('Medical').style.display = 'inline';
        document.getElementById('robot').style.display = 'none';
    }
    if (fid=='frobot'){
        document.getElementById('fcv').style.cssText = "color:Black;";
        document.getElementById('fnlp').style.cssText = "color:Black;";
        document.getElementById('frl').style.cssText = "color:Black;";
        document.getElementById('fMedical').style.cssText = "color:Black;";
        document.getElementById('frobot').style.cssText = "color:Green;";
        document.getElementById('CV').style.display = 'none';
        document.getElementById('NLP').style.display = 'none';
        document.getElementById('RL').style.display = 'none';
        document.getElementById('Medical').style.display = 'none';
        document.getElementById('robot').style.display = 'inline';
    }
}

