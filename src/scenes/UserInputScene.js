import Phaser from 'phaser';

class UserInputScene extends Phaser.Scene {
  constructor() {
    super('UserInputScene');
  }

  preload() {
    this.load.html("form", "form.html");
  }

  create() {
    
    this.nameInput = this.add.dom(640, 360).createFromCache("form");

    this.add.text(40, 250, "Hello, " , {
      fill: "#FFFFFF",
      fontSize: 60,
      fontWeight: "bold"
    }).setOrigin(.5);

    this.returnKey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.ENTER);

    this.returnKey.on("down", event => {
    // let name = this.nameInput.getChildByName("name");
    // if(name.value != "") {
    //     this.message.setText("Hello, " + name.value);
    //     name.value = "";
    // }
    let nameInput = document.querySelector('input').value;
     if(nameInput) {
        // this.message.setText("Hello, " + nameInput);
        // nameInput = "";
        console.log(nameInput);
    } else {
      // this.message.setText("Please enter a valid name!")
    }
    
  });

}

update() {

}


}

export default UserInputScene;