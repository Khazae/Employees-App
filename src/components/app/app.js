import AppFilter from "../app-filter/app-filter";
import AppInfo from "../app-info/app-info";
import EmployersList from "../employers-list/employers-list";
import SearchPanel from "../search-panel/search-panel";
import EmployeesAddForm from "../employers-add-form/employers-add-form";
import "./app.css";
import { Component } from "react";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
        {
          name: "John C",
          salary: 800,
          increase: false,
          id: 1,
          rise: false,
        },
        {
          name: "Alex M.",
          salary: 1000,
          increase: false,
          id: 2,
          rise: false,
        },
        {
          name: "Carl W.",
          salary: 2000,
          increase: false,
          id: 3,
          rise: false,
        },
        {
          name: "Aibat T.",
          salary: 1000000,
          increase: true,
          id: 4,
          rise: false,
        },
      ],
      term: "",
      filter: "",
    };
    this.maxId = 5;
  }

  deleteItem = (id) => {
    this.setState(({ data }) => {
      // const index = data.findIndex((elem) => elem.id === id);

      return {
        data: data.filter((item) => item.id !== id),
      };
    });
  };

  addItem = (name, salary) => {
    const newItem = {
      name,
      salary,
      increase: false,
      rise: false,
      id: this.maxId++,
    };
    this.setState(({ data }) => {
      const newArr = [...data, newItem];
      return {
        data: newArr,
      };
    });
  };

  onToggleProp = (id, prop) => {
    // this.setState(({ data }) => {
    //   const index = data.findIndex((elem) => elem.id === id);

    //   const old = data[index];
    //   const newItem = {
    //     ...old,
    //     increase: !old.increase,
    //   };
    //   const newArray = [
    //     ...data.slice(0, index),
    //     newItem,
    //     ...data.slice(index + 1),
    //   ];

    //   return {
    //     data: newArray,
    //   };
    // });

    this.setState(({ data }) => ({
      data: data.map((item) => {
        if (item.id === id) {
          return {
            ...item,
            [prop]: !item[prop],
          };
        }
        return item;
      }),
    }));
  };

  // onToggleRise = (id) => {
  //   this.setState(({ data }) => ({
  //     data: data.map((item) => {
  //       if (item.id === id) {
  //         return {
  //           ...item,
  //           rise: !item.rise,
  //         };
  //       }
  //       return item;
  //     }),
  //   }));
  // };

  searchEmp = (items, term) => {
    if (term.length === 0) {
      return items;
    }
    return items.filter((item) => {
      return item.name.indexOf(term) > -1;
    });
  };

  onUpdateSearch = (term) => {
    this.setState({ term });
  };

  filterPost = (items, filter) => {
    // eslint-disable-next-line default-case
    switch (filter) {
      case "rise":
        return items.filter((item) => item.rise);
      case "moreThen1000":
        return items.filter((item) => item.salary > 1000);
      default:
        return items;
    }
  };

  onFilterSelect = (filter) => {
    this.setState({ filter });
  };

  render() {
    const { data, term, filter } = this.state;

    const increased = data.filter((elem) => elem.increase);
    const visibleData = this.filterPost(this.searchEmp(data, term), filter);

    return (
      <div className="app">
        <AppInfo personCount={data.length} riseCount={increased.length} />

        <div className="search-panel">
          <SearchPanel onUpdateSearch={this.onUpdateSearch} />
          <AppFilter
          onFilterSelect={this.onFilterSelect}
          filter={filter}
          />
        </div>

        <EmployersList
          data={visibleData}
          onDelete={this.deleteItem}
          onToggleProp={this.onToggleProp}
          // onToggleIncrease={this.onToggleIncrease}
          // onToggleRise={this.onToggleRise}
        />

        <EmployeesAddForm onAdd={this.addItem} />
      </div>
    );
  }
}

export default App;
