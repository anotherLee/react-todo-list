import React, {Fragment} from 'react'
import {Button, Input, List} from "antd"


const TodoListUI = (props) => {
  const { inputValue, list, handleChange, handleClick, handleClickItem } = props
  return (
    <Fragment>
      <Input
        value={inputValue}
        style={{ width: '300px', margin: '30px', marginRight: '10px' }}
        placeholder={'todo info'}
        onChange={handleChange}
      />
      <Button onClick={handleClick} type={'primary'}>提交</Button>
      <List
        style={{ margin: '30px', marginTop: '10px', width: '300px' }}
        bordered
        dataSource={list}
        renderItem={(item, index) => (<List.Item onClick={e => handleClickItem(index)}>{item}</List.Item>)}
      />
    </Fragment>
  )
}

export default TodoListUI
