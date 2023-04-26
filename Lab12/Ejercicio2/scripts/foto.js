class Album {
    constructor(photoList) {
      this.photoList = photoList;
      this.albumView = document.querySelector('#album-view');
      this.modalView = document.querySelector('#modal-view');
      this.init();
    }
  
    init() {
      for (let i = 0; i < this.photoList.length; i++) {
        const photoSrc = this.photoList[i];
        const image = this.createImage(photoSrc);
        image.addEventListener('click', this.onThumbnailClick.bind(this));
        this.albumView.appendChild(image);
      }
      this.modalView.addEventListener('click', this.onModalClick.bind(this));
    }
  
    createImage(src) {
      const image = document.createElement('img');
      image.src = src;
      return image;
    }
  
    onThumbnailClick(event) {
      const image = this.createImage(event.currentTarget.src);
      document.body.classList.add('no-scroll');
      this.modalView.style.top = window.pageYOffset + 'px';
      this.modalView.appendChild(image);
      this.modalView.classList.remove('hidden');
    }
  
    onModalClick() {
      document.body.classList.remove('no-scroll');
      this.modalView.classList.add('hidden');
      this.modalView.innerHTML = '';
    }
  }
  
  const myAlbum = new Album(PHOTO_LIST);
  
