var data = {
  items: [{ text: 'Milk', checked:true },
          { text: 'Bread', checked: false }],
  title: 'Self shopping List',
  newItem: ''
};

new Vue({
  el: '#app',
  data: data,
  methods: {
    addItem: function () {
      var text;

      text = this.newItem.trim();
      if (text) {
        this.items.push({
          text: text,
          checked: false
        });
        this.newItem = '';
      }
    }
  }
});
