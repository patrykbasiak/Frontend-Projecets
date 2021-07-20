import React from "react";
import {
  Card,
  CardMedia,
  CardContent,
  CardActions,
  Typography,
  IconButton,
} from "@material-ui/core";
import { AddShoppingCart } from "@material-ui/icons";

import useStyles from "./styles";
const Product = ({ product, onAddToCart }) => {
  const classes = useStyles();
  console.log(product);
  return (
    <div>
      <Card className={classes.root}>
        <CardMedia
          className={classes.media}
          image={product.media.source}
          title={product.name}
        ></CardMedia>
        <CardContent>
          <div className={classes.cardContent}>
            <Typography variant="h5" gutterBottom>
              {product.name}
            </Typography>
            <Typography variant="h5" gutterBottom>
              {product.price.formatted_with_symbol}
            </Typography>
          </div>
                  <div style={{height: "120px", textAlign: 'justify' }}>
            <Typography
              dangerouslySetInnerHTML={{ __html: product.description }}
              variant="body2"
              color="textSecondary"
            ></Typography>
          </div>
        </CardContent>
        <CardActions disableSpacing className={classes.cardActions}>
          <IconButton
            aria-label="Add to Cart"
            onClick={() => onAddToCart(product.id, 1)}
          >
            <AddShoppingCart />
          </IconButton>
        </CardActions>
      </Card>
    </div>
  );
};

export default Product;
