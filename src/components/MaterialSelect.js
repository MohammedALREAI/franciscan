import { Component } from "react";
class MaterialSelect extends Component {
  render() {
    return (
      <div className=" rounded-md shadow-sm  w-full sm:flex-1 max-w-xs">
        <div className="inset-y-0 right-0 flex items-center">
          <span className="h-8 w-px " aria-hidden="true" />
          <label
            htmlFor="role"
            className=" sr-only block text-sm font-medium text-gray-700"
          >
            Role
          </label>{" "}
          <select
          id="role"
            className="mt-1 block w-full rounded-md border border-gray-300 py-2 px-3 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
            onChange={(e) => this.props.setCategory(e.target.value)}
            style={{display: "block"}}
            value={this.props.category}
          >
            <option value="15">Choose a category</option>
            <option value="0">All</option>
            {this.props.categories !== ""
              ? this.props.categories
                  .filter((category) => category.count >= 1)
                  .map((category) => (
                    <option value={category.id} key={category.id}>
                      {category.name}
                    </option>
                  ))
              : ""}
          </select>
        </div>
      </div>
    );
  }
}

export default MaterialSelect;
