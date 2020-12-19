import React from "react";

import './App.css';
import {Panel} from "./Panel";
import {Card} from "./Card";
import {Button} from "./Button";
import {loremIpsum} from "lorem-ipsum";
import {TextField} from "./TextField";
import {Banner, BannerWithIcon} from "./Banner";

const randTo = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

const genEmptyMappable = (max, min = 1) => Array(randTo(1, max)).fill(0)

const App = () => {
  const genKanban = () => {
    return genEmptyMappable(10, 2).map(() => {
      const cards = genEmptyMappable(30).map(() => <Card>{loremIpsum()}</Card>)
      return <Panel className='kanbanCard'>{cards}</Panel>
    })
  }

  return (
    <div className='app'>
      <div>
        <Banner>
          <p>Go to <a href=''>this page</a> to do this new thing with this great New Feature</p>
        </Banner>
        <Banner role='destructive'>
          <p>We are currently experiencing issues with some kind of thing</p>
        </Banner>
        <BannerWithIcon role='destructive'><p>This is something with an icon!</p></BannerWithIcon>
        <BannerWithIcon role='warning'><p>This is a warning about something!</p></BannerWithIcon>
        <Banner role='subtle'><p>This is a warning about something!</p></Banner>
      </div>

      <h1>OTZUI Show Case/Demo &amp; Component Tests</h1>
      <p>
        {loremIpsum({count: 8, paragraphLowerBound: 2, paragraphUpperBound: 6})}
      </p>

      <h2>Buttons</h2>
      <div className='buttonContainer'>
        <Button role='default' text='Basic Button' onClick={() => alert('hello, world!')}/>
        <Button role='primary' text='Primary Button' onClick={() => alert('hello, world!')}/>
        <Button role='destructive' text='Destructive/Negative Button' onClick={() => alert('hello, world!')}/>
        <Button text='No Role Button' onClick={() => alert('hello, world!')}/>
      </div>

      <h2>Cards</h2>
      <Card>This is a card.</Card>

      <h2>Input Tests</h2>
      <div className='updateTaskContainer'>
        <Panel>
          <h2>Create Task</h2>

          <div className='taskContainer'>
            <div>
              <TextField>{loremIpsum()}</TextField>
            </div>
            <div>
              <Button text='Archive' control/>
              <Button role='destructive' text='Delete' control/>
            </div>
          </div>
        </Panel>
      </div>

      <h2>Panel Tests</h2>
      <div className='kanban'>
        <div className='panelContainer'>
          {genKanban()}
        </div>
      </div>
    </div>
  )
}

export default App;
