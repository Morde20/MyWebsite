import React from "react";
import { CardDeck, Card, Button } from "react-bootstrap";

export default function Portfolio() {
  return (
    <div className='text-center' id='portfolio'>
      <h2 style={{ textDecoration: "underline" }}>Portfolio</h2>
      <CardDeck bsPrefix='cardDeck'>
        <Card>
          <Card.Img variant='top' src='images/drumkit.png' />
          <Card.Body>
            <Card.Title>Drum Kit</Card.Title>
            <Card.Text className='cardText'>
              Just make tunes with clicks or push the letters on the keyboard.
            </Card.Text>
            <Button
              href='https://morde20.github.io/DrumKit/'
              className='link'
              variant='dark'
            >
              See Project
            </Button>
            <Button
              href='https://github.com/Morde20/DrumKit'
              className='link'
              variant='dark'
            >
              <img src='images/github.png' alt='github' />
            </Button>
          </Card.Body>
          <Card.Footer>
            <small className='text-muted'>Skills : Html/Sass/Js</small>
          </Card.Footer>
        </Card>
        <Card>
          <Card.Img variant='top' src='images/hangman.png' />
          <Card.Body>
            <Card.Title>Hangman</Card.Title>
            <Card.Text className='cardText'>
              Remember the hangman game? come play like the old times.
            </Card.Text>
            <Button
              href='https://morde20.github.io/Hangman/'
              className='link'
              variant='dark'
            >
              See Project
            </Button>
            <Button
              href='https://github.com/Morde20/Hangman'
              className='link'
              variant='dark'
            >
              <img src='images/github.png' alt='github' />
            </Button>
          </Card.Body>
          <Card.Footer>
            <small className='text-muted'>Skills : Html/Sass/Js</small>
          </Card.Footer>
        </Card>
        <Card>
          <Card.Img variant='top' src='images/symonsays.png' />
          <Card.Body>
            <Card.Title>Symon Says</Card.Title>
            <Card.Text className='cardText'>
              A recreation of the popular game, with my touch.
            </Card.Text>
            <Button
              href='https://morde20.github.io/SimonSays/'
              className='link'
              variant='dark'
            >
              See Project
            </Button>
            <Button
              href='https://github.com/Morde20/SimonSays'
              className='link'
              variant='dark'
            >
              <img src='images/github.png' alt='github' />
            </Button>
          </Card.Body>
          <Card.Footer>
            <small className='text-muted'>Skills : Html/Sass/Js</small>
          </Card.Footer>
        </Card>
        <Card>
          <Card.Img variant='top' src='images/dicegame.png' />
          <Card.Body>
            <Card.Title>Dice Game</Card.Title>
            <Card.Text className='cardText'>
              Trying to make a decision? this could help.
            </Card.Text>
            <Button
              href='https://morde20.github.io/DiceGame/'
              className='link'
              variant='dark'
            >
              See Project
            </Button>
            <Button
              href='https://github.com/Morde20/DiceGame'
              className='link'
              variant='dark'
            >
              <img src='images/github.png' alt='github' />
            </Button>
          </Card.Body>
          <Card.Footer>
            <small className='text-muted'>Skills : Html/Sass/Js</small>
          </Card.Footer>
        </Card>
        <Card>
          <Card.Img variant='top' src='images/socialwall.png' />
          <Card.Body>
            <Card.Title>Social Wall</Card.Title>
            <Card.Text className='cardText'>
              Just write whatever comes to mind, Social Wall will keep it
              forever.
            </Card.Text>
            <Button
              href='https://cryptic-inlet-15292.herokuapp.com/'
              className='link'
              variant='dark'
            >
              See Project
            </Button>
            <Button
              href='https://github.com/Morde20/socialWall'
              className='link'
              variant='dark'
            >
              <img src='images/github.png' alt='github' />
            </Button>
          </Card.Body>
          <Card.Footer>
            <small className='text-muted'>
              Skills : Html/Css/Node.js/MongoDb/EJS
            </small>
          </Card.Footer>
        </Card>
        <Card>
          <Card.Img variant='top' src='images/todolist.png' />
          <Card.Body>
            <Card.Title>To Do List</Card.Title>
            <Card.Text className='cardText'>
              Create your custom ToDo List to organize your life.
            </Card.Text>
            <Button
              href='https://rocky-coast-39267.herokuapp.com/'
              className='link'
              variant='dark'
            >
              See Project
            </Button>
            <Button
              href='https://github.com/Morde20/ToDoList'
              className='link'
              variant='dark'
            >
              <img src='images/github.png' alt='github' />
            </Button>
          </Card.Body>
          <Card.Footer>
            <small className='text-muted'>
              Skills : Html/Css/Node.js/MongoDb/EJS
            </small>
          </Card.Footer>
        </Card>
        <Card>
          <Card.Img variant='top' src='images/shopcatalog.png' />
          <Card.Body>
            <Card.Title>Shop Catalog</Card.Title>
            <Card.Text className='cardText'>
              An example of a store with products and search engine.
            </Card.Text>
            <Button
              href='https://morde20.github.io/ShopCatalog/'
              className='link'
              variant='dark'
            >
              See Project
            </Button>
            <Button
              href='https://github.com/Morde20/ShopCatalog'
              className='link'
              variant='dark'
            >
              <img src='images/github.png' alt='github' />
            </Button>
          </Card.Body>
          <Card.Footer>
            <small className='text-muted'>
              Skills : JS/Html/Css/Saas/RegExp
            </small>
          </Card.Footer>
        </Card>
        <Card>
          <Card.Img variant='top' src='images/keeperapp.png' />
          <Card.Body>
            <Card.Title>Keeper App</Card.Title>
            <Card.Text className='cardText'>
              Create as many notes as you like.
            </Card.Text>
            <Button
              href='https://stickkynotes.herokuapp.com/'
              className='link'
              variant='dark'
            >
              See Project
            </Button>
            <Button
              href='https://github.com/Morde20/StickyNotes'
              className='link'
              variant='dark'
            >
              <img src='images/github.png' alt='github' />
            </Button>
          </Card.Body>
          <Card.Footer>
            <small className='text-muted'>Skills : React/Css/Node.js</small>
          </Card.Footer>
        </Card>
        <Card>
          <Card.Img variant='top' src='images/whethergiene.png' />
          <Card.Body>
            <Card.Title>Weather Genie</Card.Title>
            <Card.Text className='cardText'>
              Courious about the weather? Just enter a city name and the weather
              genie will help you.
            </Card.Text>
            <Button
              href='https://mighty-beyond-35711.herokuapp.com/'
              className='link'
              variant='dark'
            >
              See Project
            </Button>
            <Button
              href='https://github.com/Morde20/WeatherGenie'
              className='link'
              variant='dark'
            >
              <img src='images/github.png' alt='github' />
            </Button>
          </Card.Body>
          <Card.Footer>
            <small className='text-muted'>Skills : Html/Css/Node/API</small>
          </Card.Footer>
        </Card>
      </CardDeck>
    </div>
  );
}
