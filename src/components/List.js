const List = () => {
  return {
    createMarkup(users) {
      return `${users
        .map(
          user =>
            `<li class='px-4 py-2 bg-white border-b last:border-none border-gray-200'>${user.name}</li>`
        )
        .join('\n')}`;
    },
    render(state, selector = 'list-container') {
      const parent = document.getElementById(selector);
      const markup = this.createMarkup(state);
      parent.innerHTML = markup;
    },
    update(data) {
      this.render(data);
    },
  };
};

export default List;
