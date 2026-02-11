import {  useState } from 'react';
import './styles.css'

const CheckboxesData = [
  {
    id: 1,
    label: "Fruits",
    children: [
      { id: 2, label: "Apple" },
      { id: 3, label: "Banana" },
      {
        id: 4,
        label: "Citrus",
        children: [
          { id: 5, label: "Orange" },
          { id: 6, label: "Lemon" },
        ],
      },
    ],
  },
  {
    id: 7,
    label: "Vegetables",
    children: [
      { id: 8, label: "Carrot" },
      { id: 9, label: "Broccoli" },
    ],
  },
];

const Checkboxes = ({ data, checked, setChecked, parent = null }) => {

  const handleChange = (isChecked, node, parent) => {
    setChecked((prev) => {
      const newState = { ...prev, [node.id]: isChecked };
      /**
       * { 1: true, 2: true }
        Child 3 (Banana)
        directly modify the newState dont create new Object
         newState[3] = true
          { 1: true, 2: true, 3: true}
       */
      const updateChildren = (node) => {
        node.children?.forEach((child) => {
          newState[child.id] = isChecked;
          updateChildren(child);
        })

      }
      //on click of checkbx we want to check all children as well so first check whether we have chldren or not
      { node.children && updateChildren(node) }

      //Update parent when we click on child

      if (parent) {
        const allChildChecked = parent.children.every(
          (child) => newState[child.id]
        )
        newState[parent.id] = allChildChecked;
      }

      return newState;
    });
  };



  return (
    <div>
      {data.map((node) => (
        <div className="parent-node" key={node.id}>
          <input type="checkBox"
            checked={checked[node.id] || false}
            onChange={(e) => handleChange(e.target.checked, node, parent)}

          ></input>
          <span className="title">{node.label}</span>
          {node.children &&
            <Checkboxes data={node.children}
              checked={checked}
              setChecked={setChecked}
              parent={node}
            />
          }
        </div>
      ))}
    </div>


  );
};

export default function NestedCheckbox() {
  const [checked, setChecked] = useState({});

  return (
    <div>
      <h2>Nested Checkbox</h2>
      <Checkboxes
        data={CheckboxesData}
        checked={checked}
        setChecked={setChecked}
      />
    </div>
  );
}
