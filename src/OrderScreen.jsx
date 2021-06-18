import React, { useContext, useEffect, useState } from 'react';
import {
  Box,
  List,
  Grid,
  ListItem,
  Avatar,
  CircularProgress,
  Typography,
  CardMedia,
  CardActionArea,
  Card,
  CardContent,
} from '@material-ui/core';
import { Alert } from '@material-ui/lab';
import { useStyles } from './styles';
import { listCategories, listProducts } from './actions';
import { Store } from './Store';
import Logo from './components/Logo';

export default function OrderScreen() {
  const styles = useStyles();
  const [categoryName, setCategoryName] = useState('');
  const { state, dispatch } = useContext(Store);
    const { categories, loading, error } = state.categoryList;
  const {
    products,
    loading: loadingProducts,
    error: errorProducts,
  } = state.productList;

  useEffect(() => {
    if (!categories) {
      listCategories(dispatch);
    } else {
      listCategories(dispatch, categoryName);
    }
  }, [dispatch, categories, categoryName]);

 

  const categoryClickHandler = (name) => {
    setCategoryName(name);
    listProducts(dispatch, categoryName);
  };

  return (
    <Box className={styles.root}>
      <Box className={styles.main}>
        <Grid container>
          <Grid item md={2}>
            <List>
              {loading ? (
                <CircularProgress />
              ) : error ? (
                <Alert severity="error">{error}</Alert>
              ) : (
                <>
                  <ListItem button>
                    <Logo></Logo>
                  </ListItem>
                  {categories.map((category) => (
                    <ListItem
                      key={category.name}
                      button
                      onClick={() => categoryClickHandler(category.name)}
                    >
                      <Avatar src={category.image} alt={category.name} />
                    </ListItem>
                  ))}
                </>
              )}
            </List>
          </Grid>
          <Grid item md={10}>
            <Typography
              gutterBottom
              className={styles.title}
              variant="h2"
              component="h2"
            >
              {categoryName || 'Main Menu'}
            </Typography>
            <Grid container spacing={1}>
              {loadingProducts ? (
                <CircularProgress />
              ) : errorProducts ? (
                <Alert severity="error">{errorProducts}</Alert>
              ) : (
                products.map((product) => (
                  <Grid item md={6}>
                    <Card style={styles.card}>
                      <CardActionArea>
                        <CardMedia
                          component="img"
                          alt={product.name}
                          image={product.image}
                          className={styles.media}
                        ></CardMedia>
                      </CardActionArea>
                      <CardContent>
                        <Typography
                          gutterBottom
                          variant="body2"
                          color="textPrimary"
                          component="p"
                        >
                          {product.name}
                        </Typography>
                        <Box className={styles.cardFooter}>
                          <Typography
                            gutterBottom
                            variant="body2"
                            color="textPrimary"
                            component="p"
                          >
                            {product.calorie} Cal
                          </Typography>
                          <Typography
                            gutterBottom
                            variant="body2"
                            color="textPrimary"
                            component="p"
                          >
                            £ {product.price} 
                          </Typography>
                        </Box>
                      </CardContent>
                    </Card>
                  </Grid>
                ))
              )}
            </Grid>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
}
