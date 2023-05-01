class Regalo{
    constructor(containerElement, regaloSrc, callbackAbierto){
        this.containerElement = containerElement;
        this.abrirRegalo = this.abrirRegalo.bind(this);

        this.callbackAbierto = callbackAbierto;
        
        this.regaloSrc = regaloSrc;
        this.image = document.createElement('img');
        this.image.src = "https://media0.giphy.com/media/giKdkKxdDWecg524cE/giphy.gif?cid=ecf05e47s9bc4d244i1teavygefag5xnok9y19hgisb3270y&ep=v1_gifs_search&rid=giphy.gif&ct=g";
        this.image.addEventListener('click', this.abrirRegalo);
        this.containerElement.appendChild(this.image)
    }
    abrirRegalo(event){
        this.image.src = this.regaloSrc;
        this.image.removeEventListener('click', this.abrirRegalo);
        this.callbackAbierto();
    }
}