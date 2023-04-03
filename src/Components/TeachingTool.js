import { ArrowLeftOutlined } from "@ant-design/icons";
import {
  ArrowRightOutlined,
  DeleteOutlined,
  DragOutlined,
  PlusCircleOutlined,
} from "@ant-design/icons/lib/icons";
import React, { useEffect, useState } from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import { Input } from "antd";
import ToolHeading from "./ToolHeading";
import { v4 as genId } from "uuid";
import { levels } from "../Constants";

export default function TeachingTool() {
  const [standard, setStandard] = useState([]);
  const [currentClass, setClass] = useState(levels.levelone);

  useEffect(() => {
    console.log(standard);
  }, [standard]);

  const AddStandard = () => {
    let id = genId();
    let value = "";
    if(standard.length===0){
      setClass(levels.levelone)
    }
    setStandard((prev) => [
      ...prev,
      {
        id,
        value,
        typeofelem: currentClass,
        children:[],
      },
    ]);
  };

  const DeleteNode = (id) => {
    let filteredList = standard.filter((item) => item.id !== id);
    setStandard([...filteredList]);
  };

  const changeInput = (e, index, id) => {
    let newListItem = {
      id,
      value: e.target.value,
      classNameforElem: currentClass,
    };
    let allItemArr = [...standard];
    allItemArr[index] = newListItem;
    setStandard(allItemArr);
  };

  const startTheDragStage = (e, index, id) => {
    console.log(e, index, id);
  };

  const enterDragStage = (e, index, id) => {
    console.log(e, index, id);
  };

  const Indent = (index, id) => {
    let itemforindentation = standard.find((item) => item.id === id);
    let newArr = [];
    switch (currentClass) {
      case "levelone":
        setClass(levels.leveltwo);
        itemforindentation.classNameforElem = levels.leveltwo;
        newArr = [...standard];
        newArr[index] = itemforindentation;
        setStandard(newArr);
        break;
      case "leveltwo":
        setClass(levels.levelthree);
        itemforindentation.classNameforElem = levels.levelthree;
        newArr = [...standard];
        newArr[index] = itemforindentation;
        setStandard(newArr);
        break;
      default:
        break;
    }
  };

  const OutDent = (index, id) => {
    let itemforindentation = standard.find((item) => item.id === id);
    let newArr = [];
    switch (currentClass) {
      case "leveltwo":
        setClass(levels.levelone);
        itemforindentation.classNameforElem = levels.levelone;
        newArr = [...standard];
        newArr[index] = itemforindentation;
        setStandard(newArr);
        break;
      case "levelthree":
        setClass(levels.leveltwo);
        itemforindentation.classNameforElem = levels.leveltwo;
        newArr = [...standard];
        newArr[index] = itemforindentation;
        setStandard(newArr);
        break;
      default:
        break;
    }
  };

  return (
    <>
      <Container fluid>
        <div className="heading">MATHEMATICS</div>
        <ToolHeading />
        {standard.map((item, index) => {
          return (
            <div
              key={index}
              draggable
              onDragStart={(e) => startTheDragStage(e, index, item.id)}
              onDragEnter={(e) => enterDragStage(e, index, item.id)}
            >
              <Row>
                <Col md={3}>
                  <DragOutlined className="p-2" />
                  <ArrowLeftOutlined
                    className="p-2"
                    onClick={()=>OutDent(index, item.id)}
                  />
                  <ArrowRightOutlined
                    className="p-2"
                    onClick={() => Indent(index, item.id)}
                  />
                  <DeleteOutlined
                    className="p-2"
                    onClick={() => DeleteNode(item.id)}
                  />
                </Col>
                <Col md={9}>
                  <Input
                    placeholder="Add text here"
                    bordered={false}
                    className={`p-2 ${item.classNameforElem}`}
                    onChange={(e) => changeInput(e, index, item.id)}
                    value={item.value}
                  />
                </Col>
              </Row>
            </div>
          );
        })}
        <Row>
          <Button
            type="button"
            className="p-3 text-white"
            onClick={AddStandard}
          >
            <PlusCircleOutlined className="p-2" />
            Add a standard
          </Button>
        </Row>
      </Container>
    </>
  );
}
