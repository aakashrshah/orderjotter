import React from 'react';
import { connect } from 'react-redux';
import Grid from '@material-ui/core/Grid';

export function CategoryPage() {
  return (
    <Grid container spacing={1}>
      <Grid container spacing={1} direction="row" />
    </Grid>
  );
}

CategoryPage.propTypes = {
};

export default connect()(CategoryPage);
