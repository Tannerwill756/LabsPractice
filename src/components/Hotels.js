import React from "react";
import { Input, Button } from "antd";
import "../css/index.css";

const { Search } = Input;

const Hotels = () => {
  return (
    <div className="mainHub">
      <div className="search-add">
        <Search
          placeholder="input search text"
          onSearch={(value) => console.log(value)}
          style={{ width: 300 }}
        />
        <Button type="dashed">Add Hotel</Button>
      </div>
    </div>
  );
};

export default Hotels;
