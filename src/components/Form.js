const Form = state => {
  return {
    createMarkup() {
      return `
        <form id="add-user" class='space-y-2'>
          <label for="username" class="mb-3 block text-base font-medium text-[#07074D]">Add a User</label>
          <input class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md" id="username" type="text" name="name" />
          <button
            type="submit"
            class="hover:shadow-form rounded-md bg-[#6A64F1] py-3 px-8 text-base font-semibold text-white outline-none"
          >
            Add
          </button>
        </form>
      `;
    },
    render(selector = 'form-container') {
      const parent = document.getElementById(selector);
      const markup = this.createMarkup();
      parent.innerHTML = markup;
      this.events();
    },
    events() {
      const form = document.getElementById('add-user');

      form.addEventListener('submit', e => {
        e.preventDefault();

        // if input value is null
        const input = e.target.name;
        const value = input.value;

        if (!value) return;

        // Getting the current state.
        const users = [
          ...state.state,
          { id: state.state.length + 1, name: value },
        ];
        state.update(users);

        // Clear input
        input.value = '';
      });
    },
  };
};

export default Form;
