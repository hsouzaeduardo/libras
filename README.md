<!-- AUTO-GENERATED-CONTENT:START (STARTER) -->
<p align="center">
  <a href="https://handsign-m4qq6.ondigitalocean.app/">
    <img alt="Handsign logo" src="./src/images/loveyou_emoji.svg" width="80" />
  </a>
</p>
<h1 align="center">
  Handsign - ASL Hand Gesture Detection Using TensorFlow
</h1>

Libras é um simples reconhecimento de gestos de mão baseado em IA que traduz uma pose de mão no alfabeto sendo adaptado de (ASL) para libras. Usando o Tensorflow JS e seu modelo pré-carregado Handpose para detectar o objeto de mão e suas partes. A Handsign também usa uma biblioteca adicional chamada Fingerpose para classificar alguns dos gestos de mão personalizados com base na posição do dedo.

`#dohackathon` `#madewithTFJS`

# Instalação
1. **Clone o repositório**

  ```shell
    git clone https://github.com/syauqy/handsign-tensorflow-gatsby.git
  ```

2. **Start the project**

  ```shell
  # move to the project folder and install all dependencies
  
  cd handsign-tensorflow-gatsby
  yarn install
  ```

3. **Run the project on your local machine**

  ```shell
  # run Gatsby

  yarn develop
  ```

4. **The project is live 🚀**
  
  Your project is live and running at `http://localhost:8000`

  You can edit the core program at `src/pages/app.js`

# What's inside the project
## Extract the fingerpose data

uncomment the `<pre>` component

  ```js
  <Image h="150px" objectFit="cover" id='emojimage'/> 

  // uncomment this
  {/* <pre className="pose-data" color="white" style={{position: 'fixed', top: '150px', left: '10px'}} >Pose data</pre> */}

  </Container>
  ```
uncomment the `estimatedGestures` data to change `'.pose-data'` innerHTML

  ```js
  // document.querySelector('.pose-data').innerHTML =JSON.stringify(estimatedGestures.poseData, null, 2);
  ```
the `estimatedGestures` data will render on your screen.

# References & Libraries
* [Tensorflow JS](https://www.tensorflow.org/js) - A Library for ML in JS.

* [Handpose](https://github.com/tensorflow/tfjs-models/tree/master/handpose) - A lightweight ML pipeline consisting of two models: A palm detector and a hand-skeleton finger tracking model.

* [Fingerpose](https://github.com/andypotato/fingerpose) - A pose classifier for hand landmarks detected by TensorFlow.js Handpose's model.

* Sign language illustration is created by [Pelin Kahraman](https://thenounproject.com/pelodrome/)

If you want to learn more about Tensorflow JS and custom gesture handpose, please kindly check these amazing videos

* [Machine Learning with TensorFlow in JavaScript](https://www.youtube.com/watch?v=WIHZ7kjJ35o) - by [Jason Lengstorf](https://github.com/jlengstorf) and [Jason Mayes](https://github.com/jasonmayes)

* [Building a Real Time Sign Language Detection App with React.JS and Tensorflow.JS](https://www.youtube.com/watch?v=ZTSRZt04JkY) - by [Nicholas Renotte](https://github.com/nicknochnack)

<!-- AUTO-GENERATED-CONTENT:END -->
