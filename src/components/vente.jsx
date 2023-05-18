import React from "react";

const Vente = () => {
  return (
    <form class="max-w-md mx-auto">
      <div class="mb-4">
        <label for="option1" class="block mb-2 font-bold">
          vente or location:
        </label>
        <select
          id="option1"
          name="option1"
          class="w-full p-2 border border-gray-300 rounded"
        >
          <option value="option1-1">Option 1-1</option>
          <option value="option1-2">Option 1-2</option>
          <option value="option1-3">Option 1-3</option>
        </select>
      </div>
      <div class="mb-4">
        <label for="option2" class="block mb-2 font-bold">
          Select Option 2:
        </label>
        <select
          id="option2"
          name="option2"
          class="w-full p-2 border border-gray-300 rounded"
        >
          <option value="option2-1">Option 2-1</option>
          <option value="option2-2">Option 2-2</option>
          <option value="option2-3">Option 2-3</option>
        </select>
      </div>
      <div>
        {/* <input
                type="submit"
                value="Submit"
                class="px-4 py-2 text-white bg-blue-500 rounded cursor-pointer"
              /> */}
      </div>
    </form>
  );
};

export default Vente;
