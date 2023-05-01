class Regalo{
    constructor(containerElement){
        this.containerElement = containerElement;
        this.abrirRegalo = this.abrirRegalo.bind(this);
        this.image = document.createElement('img');
        this.image.src = "https://media0.giphy.com/media/giKdkKxdDWecg524cE/giphy.gif?cid=ecf05e47s9bc4d244i1teavygefag5xnok9y19hgisb3270y&ep=v1_gifs_search&rid=giphy.gif&ct=g";
        this.image.addEventListener('click', this.abrirRegalo);
        this.containerElement.appendChild(this.image)
    }
    abrirRegalo(event){
        this.image.src = 'https://media.giphy.com/media/27ppQUOxe7KlG/giphy.gif';
        this.image.removeEventListener('click', this.abrirRegalo);
    }
}