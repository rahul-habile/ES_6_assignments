class LocalStorageCus {
    constructor() {
      this.map = new Map();
    }
    setItem(key, value) {
      if (typeof value !== "string") {
        return this.map.set(key, JSON.stringify(value));
      }
      this.map.set(key, value);
    }
    getItem(key) {
      if (this.map.has(key)) {
        console.log(this.map.get(key));
      } else {
        console.log("The key is not Defined ");
      }
    }
    removeItem(key) {
      if (this.map.has(key)) {
        this.map.delete(key);
        console.log("The element is delete");
      } else {
        console.log("This key is not exist in localStorage ");
      }
    }
    clear() {
      if (this.map.size) {
        this.map.clear();
      } else {
        console.log("Data not found");
      }
      console.log(this.map.size);
    }
    legth() {
      console.log('Localstorage : '+this.map.size+' Key Present in LocalStorage');
    }
  }
  let obj = new LocalStorageCus();
  obj.setItem("name", "Rahul");
  obj.setItem("age", 21);
  obj.getItem("name");
  obj.legth();
  console.log(obj);
  obj.removeItem("age");
  console.log(obj);
  
  