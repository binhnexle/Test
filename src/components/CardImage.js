import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import CardMedia from '@mui/material/CardMedia';
import { BASE_URL, FORMAT_DATE } from '../constants';
import moment from 'moment/moment';

export default function CardImage({ title, last_update, imgLink, path }) {
  return (
    <Card sx={{ maxWidth: 500 }}>
      <Grid container spacing={1}>
        <Grid item xs={4}>
          <CardContent
            sx={{
              pl: 1,
              pr: 1,
            }}
          >
            <CardMedia component="img" height="150" image={`${BASE_URL}${imgLink}`} alt="Image" />
          </CardContent>
        </Grid>
        <Grid item xs={8}>
          <CardContent>
            <Grid item xs container direction="column" spacing={2}>
              <Grid item xs={8}>
                <Typography
                  sx={{
                    overflow: 'hidden',
                    textOverflow: 'ellipsis',
                    display: '-webkit-box',
                    WebkitLineClamp: '3',
                    WebkitBoxOrient: 'vertical',
                    fontWeight: 'bold',
                  }}
                  variant="body1"
                  align="left"
                  gutterBottom
                  color="text.secondary"
                >
                  {title}
                </Typography>
              </Grid>

              <Grid item xs={8}>
                <Typography variant="body2" align="left" color="text.secondary">
                  {moment(Number(last_update)).format(FORMAT_DATE)}
                </Typography>
              </Grid>
            </Grid>
          </CardContent>
        </Grid>
      </Grid>
    </Card>
  );
}
