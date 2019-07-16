import React, { useState } from "react";
import "./QuoteBox.css";
import Card from "@material-ui/core/Card";
import { createStyles, makeStyles } from "@material-ui/core/styles";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles((theme) =>
  createStyles({
    box: {
      height: "100vh",
      background: "#fff",
      width: "50%",
      height: "50%",
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-between",
      overflow: "scroll"
    },
    buttonWrapper: {
      margin: theme.spacing(2),
      display: "flex",
      justifyContent: "center",
      flexWrap: "wrap"
    },
    content: {
      margin: theme.spacing(2),
      color: (props) => props.color,
      transition: "all 1s",
      display: "flex",
      flexDirection: "column"
    },
    blockquote: {
      background: "#f9f9f9",
      borderLeft: "10px solid #ccc",
      fontStyle: "italic",
      letterSpacing: "1px",
      fontSize: "1.3em",
      position: "relative",
      lineHeight: 1.6,
      padding: "20px 20px 20px 70px",
      "&:before": {
        transition: "all 1s",
        fontFamily: "arial",
        content: "“",
        content: "open-quote",
        color: (props) => props.color,
        fontSize: "4em",
        position: "absolute",
        left: "10px",
        top: "-10px"
      }
    },
    author: {
      marginLeft: "auto"
    },
    button: {
      minWidth: "130px",
      marginTop: "1rem",
      marginLeft: "1rem",
      marginRight: "1rem",
      transition: "all 1s",
      background: (props) => props.color,
      color: "#fff",
      "&:hover": {
        background: (props) => props.color,
        opacity: "0.8"
      }
    }
  })
);

const QuoteBox = ({ getQuote, quote }) => {
  const classes = useStyles(quote);
  const { author, text } = quote;
  return (
    <Card id="quote-box" className={classes.box}>
      <CardContent className={classes.content}>
        <Typography className={classes.blockquote} id="text">
          {text}
        </Typography>
        <Typography
          className={classes.author}
          id="author"
        >{`- ${author}`}</Typography>
      </CardContent>
      <CardActions className={classes.buttonWrapper}>
        <a>
          <Button
            className={classes.button}
            size="large"
            variant="contained"
            id="tweet-quote"
            href={`https://twitter.com/intent/tweet?text=${text},${author}`}
          >
            Tweet
          </Button>
        </a>
        <Button
          className={classes.button}
          size="large"
          variant="contained"
          id="new-quote"
          onClick={getQuote}
        >
          New Quote
        </Button>
      </CardActions>
    </Card>
  );
};

export default QuoteBox;
