import Layout from "../components/Layout";
import { Grid } from "@material-ui/core";

const color = () => {
  return (
    <Layout title="Color">
      <div>
        <Grid container>
          <Grid item xs={6}>
            <div>갈색모</div>
          </Grid>
          <Grid item xs={6}>
            <div>흑록모</div>
          </Grid>
          <Grid item xs={6}>
            <div>청록모</div>
          </Grid>
          <Grid item xs={6}>
            <div>청흑색</div>
          </Grid>
          <Grid item xs={6}>
            <div>회백색</div>
          </Grid>
          <Grid item xs={6}>
            <div>밤색</div>
          </Grid>
          <Grid item xs={6}>
            <div>진한밤색</div>
          </Grid>
          <Grid item xs={6}>
            <div>흰색</div>
          </Grid>
        </Grid>
      </div>
    </Layout>
  );
};

export default color;
