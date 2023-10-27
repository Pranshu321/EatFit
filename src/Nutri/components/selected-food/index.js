import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { InputNumber, Button } from 'antd'
// import Icon from "@ant-design/icons";
import {RiDeleteBin6Line} from "react-icons/ri";

export default class SelectedFood extends Component {
  static propTypes = {
    onChange: PropTypes.func.isRequired,
    onRemove: PropTypes.func.isRequired,
    selectedFood: PropTypes.shape({
      food: PropTypes.shape({
        name: PropTypes.string.isRequired,
      }).isRequired,
      amount: PropTypes.number,
    }).isRequired,
  }
  onAmountChange = amount => {
    this.props.onChange({
      ...this.props.selectedFood,
      amount: amount,
    })
  }
  onDelete = () => this.props.onRemove(this.props.selectedFood)
  render() {
    return (
      <div className="selectedFood">
        <h2 className='text-lg font-semibold'>{this.props.selectedFood.food.name}</h2>
        <div className="selectedFoodAmount">
          <InputNumber
            addonAfter="grams"
            min={0}
            max={5000}
            type="number"
            onChange={this.onAmountChange}
            defaultValue={this.props.selectedFood.amount}
          />
          <Button onClick={this.onDelete} className="deleteBtn">
            <RiDeleteBin6Line color='gray' />
          </Button>
        </div>
      </div>
    )
  }
}
