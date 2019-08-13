import React, {Component} from 'react';
import {makeStyles} from '@material-ui/core/styles';
import StockComponent from "../ProductComponents/StockComponent";
import {Card} from "@material-ui/core";
import GridList from "@material-ui/core/GridList";
import Container from "@material-ui/core/Container";
import Grid from '@material-ui/core/Grid';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import CssBaseline from '@material-ui/core/CssBaseline';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import {keys} from "@material-ui/core/styles/createBreakpoints";

const useStyles = makeStyles(theme => ({
    icon: {
        marginRight: theme.spacing(2),
    },
    heroContent: {
        backgroundColor: theme.palette.background.paper,
        padding: theme.spacing(8, 0, 6),
    },
    heroButtons: {
        marginTop: theme.spacing(4),
    },
    cardGrid: {
        paddingTop: theme.spacing(8),
        paddingBottom: theme.spacing(8),
    },
    card: {
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
    },
    cardMedia: {
        paddingTop: '56.25%', // 16:9
    },
    cardContent: {
        flexGrow: 1,
    },
    footer: {
        backgroundColor: theme.palette.background.paper,
        padding: theme.spacing(6),
    },
}));

const edidtors = [
    {
        "id": 7,
        "username": "ddsdssd",
        "email": "eddsdsds222@gmail.com",
        "password": "3333322",
        "firstName": "mike",
        "lastName": "kong",
        "dtype": "Editor",
        "featuredProducts": [
            {
                "id": 16,
                "title": "Jordan 13 Retro Bred (2017)",
                "urlKey": "air-jordan-13-retro-playoffs-2017",
                "uuid": "591e2a9c-b2ea-43a8-a626-a9a8be7f79f6",
                "description": "",
                "marketPrice": 197,
                "retailPrice": 190,
                "imageUrl": "https://stockx.imgix.net/Air-Jordan-13-Retro-Bred-2017-Product.jpg?fit=fill&bg=FFFFFF&w=700&h=500&auto=format,compress&q=90&dpr=2&trim=color&updated_at=1538080256",
                "styleCode": "414571-004",
                "colorway": "Black/True Red-White",
                "releaseDate": "2017-08-19",
                "brand": "Jordan",
                "reviews": []
            },
            {
                "id": 14,
                "title": "Jordan 1 Retro High \"Not for Resale\" Varsity Red",
                "urlKey": "air-jordan-1-retro-high-no-ls-varsity-red",
                "uuid": "aa18932d-416e-4bd0-826b-25442c30832f",
                "description": "Time to break open the piggy bank and purchase the Jordan 1 Retro High “Not for Resale” Varsity Red. This Jordan 1 comes with a white leather upper plus black accents, black Nike “Swoosh”, white midsole, and red sole. These sneakers released in November 2018 and retailed for $160. It might say “Not For Resale” on the midsole but you can cop these on StockX now. ",
                "marketPrice": 612,
                "retailPrice": 160,
                "imageUrl": "https://stockx.imgix.net/Air-Jordan-1-Retro-High-No-Ls-Varsity-Red-Product.jpg?fit=fill&bg=FFFFFF&w=700&h=500&auto=format,compress&q=90&dpr=2&trim=color&updated_at=1546583537",
                "styleCode": "861428-106",
                "colorway": "Sail/Black-Varsity Red",
                "releaseDate": "2018-11-07",
                "brand": "Jordan",
                "reviews": []
            },
            {
                "id": 11,
                "title": "adidas Yeezy Boost 350 V2 Semi Frozen Yellow",
                "urlKey": "adidas-yeezy-boost-350-v2-semi-frozen-yellow",
                "uuid": "d16d221d-f7f0-4f00-895c-0f4009abc223",
                "description": "The Semi Frozen Yellow adidas Yeezy Boost 350 V2 was rumored as early as May of 2017-some blogs even claimed they would be mostly glow-in-the-dark-but it was when photos of Kanye West wearing them first surfaced on the web later in the year that confirmed the release. This colorway steps outside of the comfort zone of previous 350 Yeezy sneaker releases, which have remained subtle and mostly neutral primary colors and bright accents.  The official colorway of the 'Frozen Yellow Yeezys' is actually Semi Frozen Yellow, Raw Steel and Red and features both of adidas pinnacle technologies, Boost cushioning and Primeknit sock-like upper. The hype for the yellow colored Yeezys was pushed to the roof before launch as Kanye West appeared with Kid Cudi and Takashi Murakami as 'Ye and Cudi toured the iconic artist's studio on a trip to Tokyo. In addition, the rumors throughout the sneaker world suggested the Frozen Yellow Yeezy would be an extremely hard to get release. As expected, the Semi Frozen Yellow was announced officially on November 13th, 2017 and released in limited quantities on November 18th, 2017. Sizes of the adidas Yeezy Boost 350 V2 Semi Frozen Yellow are available now.",
                "marketPrice": 293,
                "retailPrice": 220,
                "imageUrl": "https://stockx.imgix.net/Adidas-Yeezy-Boost-350-V2-Semi-Frozen-Yellow-Product.jpg?fit=fill&bg=FFFFFF&w=700&h=500&auto=format,compress&q=90&dpr=2&trim=color&updated_at=1538080256",
                "styleCode": "B37572",
                "colorway": "Semi Frozen Yellow/Raw Steel/Red",
                "releaseDate": "2017-11-18",
                "brand": "adidas",
                "reviews": []
            },
            {
                "id": 12,
                "title": "Jordan 6 Retro Gatorade Green",
                "urlKey": "air-jordan-6-retro-gatorade-green",
                "uuid": "a7d1bb26-6479-454c-9766-0f7e0620c200",
                "description": "",
                "marketPrice": 244,
                "retailPrice": 225,
                "imageUrl": "https://stockx.imgix.net/Air-Jordan-6-Retro-Gatorade-Green-Product.jpg?fit=fill&bg=FFFFFF&w=700&h=500&auto=format,compress&q=90&dpr=2&trim=color&updated_at=1538080256",
                "styleCode": "AJ5986-335",
                "colorway": "Pine Green/Orange Blaze-Pine Green",
                "releaseDate": "2017-12-30",
                "brand": "Jordan",
                "reviews": []
            },
            {
                "id": 15,
                "title": "Jordan 6 Retro All Star 2017 \"Chameleon\"",
                "urlKey": "air-jordan-6-retro-all-star-2017",
                "uuid": "41f639ee-a50a-41c1-8dd0-dc368f79f298",
                "description": "",
                "marketPrice": 159,
                "retailPrice": 225,
                "imageUrl": "https://stockx.imgix.net/Air-Jordan-6-Retro-All-Star-2017.png?fit=fill&bg=FFFFFF&w=700&h=500&auto=format,compress&q=90&dpr=2&trim=color&updated_at=1538080256",
                "styleCode": "907961-015",
                "colorway": "Black/Black-Metallic Silver-White",
                "releaseDate": "2017-02-19",
                "brand": "Jordan",
                "reviews": []
            },
            {
                "id": 13,
                "title": "Jordan 8 Retro Aqua (2015)",
                "urlKey": "jordan-8-retro-aqua-2015",
                "uuid": "0ce94034-afb4-410f-9be7-9cd951225515",
                "description": "",
                "marketPrice": 210,
                "retailPrice": 190,
                "imageUrl": "https://stockx.imgix.net/Air-Jordan-8-Retro-Aqua-2015-Product.jpg?fit=fill&bg=FFFFFF&w=700&h=500&auto=format,compress&q=90&dpr=2&trim=color&updated_at=1551743099",
                "styleCode": "305381-025",
                "colorway": "Black/Bright Concord-Aqua Tone",
                "releaseDate": "2015-11-27",
                "brand": "Jordan",
                "reviews": []
            }
        ]
    },
    {
        "id": 15,
        "username": "zhu123",
        "email": "123444@gmail.com",
        "password": "3333322",
        "firstName": "zhu",
        "lastName": "kong",
        "dtype": "Editor",
        "featuredProducts": [
            {
                "id": 17,
                "title": "Jordan 5 Retro Wings",
                "urlKey": "air-jordan-5-retro-wings",
                "uuid": "c1453e36-3949-48d4-bdb9-ce3810450449",
                "description": "<b> PLEASE NOTE: The Patterning on the upper of this shoe varies and may be different from the photo.<b><br>Before time slips away, fly like an eagle while wearing the Jordan 5 Retro Wings. This memorable silhouette comes in a white leather upper with hand drawings from kids of the nonprofit cultural center Black Pearl in Chicago. The sneaker also features bright green accents, a white midsole, and a translucent sole. These released in September 2018 and retailed for $200. Add this to your sneaker rotation and place a Bid on StockX. ",
                "marketPrice": 296,
                "retailPrice": 200,
                "imageUrl": "https://stockx.imgix.net/Air-Jordan-5-Retro-Wings-Product.jpg?fit=fill&bg=FFFFFF&w=700&h=500&auto=format,compress&q=90&dpr=2&trim=color&updated_at=1539027461",
                "styleCode": "AV2405-900",
                "colorway": "Multi-Color/Multi-Color",
                "releaseDate": "2018-09-29",
                "brand": "Jordan",
                "reviews": []
            },
            {
                "id": 18,
                "title": "Air Max 1/97 Sean Wotherspoon (Extra Lace Set Only)",
                "urlKey": "nike-air-max-1-97-sean-wotherspoon-na",
                "uuid": "ea2d8ce5-b912-4fb0-b1dd-21c2032e92aa",
                "description": "The Air Max 97/1 Sean Wotherspoon is a perfect example of what Kevin Garnett was talking about when he yelled that “ANYTHING IS POSSIBLEEE!!” This ultra-special Nike Air Max 97/1 was originally part of a Nike design contest that Sean entered and ended up winning. Reportedly inspired by Sean’s love for vintage Nike hats from the 1980s, this shoe features both the upper of the Air Max 97 and the sole unit of the Air Max 1, a killer combo. The shoe also has a unique colorful corduroy upper with frayed edges, a truly one-of-a-kind look, with velour from toe to heel. These grails dropped on Air Max day 2018 (March 26th) and retailed at $160. If you’re an Air Max fan, these are a pair that is a must have in your collection and one that will be sure to turn heads. This no accessories version comes with an extra lace set only.",
                "marketPrice": 781,
                "retailPrice": 160,
                "imageUrl": "https://stockx.imgix.net/Nike-Air-Max-1-97-Sean-Wotherspoon-NA-Product.jpg?fit=fill&bg=FFFFFF&w=700&h=500&auto=format,compress&q=90&dpr=2&trim=color&updated_at=1538080256",
                "styleCode": "AJ4219-400",
                "colorway": "Light Blue Fury/Lemon Wash",
                "releaseDate": "2018-03-26",
                "brand": "Nike",
                "reviews": []
            },
            {
                "id": 19,
                "title": "Jordan 5 Retro Blue Suede",
                "urlKey": "air-jordan-5-retro-blue-suede",
                "uuid": "374b6c07-4eba-4ea6-b6ac-038bcb2f39d3",
                "description": "",
                "marketPrice": 187,
                "retailPrice": 190,
                "imageUrl": "https://stockx.imgix.net/Air-Jordan-5-Retro-Blue-Suede-Product.jpg?fit=fill&bg=FFFFFF&w=700&h=500&auto=format,compress&q=90&dpr=2&trim=color&updated_at=1546584395",
                "styleCode": "136027-401",
                "colorway": "Game Royal/Black",
                "releaseDate": "2017-09-30",
                "brand": "Jordan",
                "reviews": []
            }
        ]
    },
    {
        "id": 16,
        "username": "xuan1993",
        "email": "kxusn@gmail.com",
        "password": "112233445",
        "firstName": "Xssd",
        "lastName": "Kong",
        "dtype": "Editor",
        "featuredProducts": [
            {
                "id": 21,
                "title": "Jordan 7 Retro Patta Shimmer",
                "urlKey": "air-jordan-7-retro-patta-shimmer",
                "uuid": "6feb01d4-0862-4e99-8ff0-d15b0e570a81",
                "description": "Shimmy while rocking these Jordan 7 Retro Patta Shimmers. This AJ 7 comes with a brown upper plus red accents, red Jordan Jumpman, brown midsole, and a black sole. These sneakers released in May 2019 and retailed for $200. Step your drip up and place a Bid for these on StockX.",
                "marketPrice": 283,
                "retailPrice": 200,
                "imageUrl": "https://stockx.imgix.net/Air-Jordan-7-Retro-Patta-Shimmer-Product.jpg?fit=fill&bg=FFFFFF&w=700&h=500&auto=format,compress&q=90&dpr=2&trim=color&updated_at=1560201463",
                "styleCode": "AT3375-200",
                "colorway": "Shimmer/Tough Red-Mahogany Mink-Velvet Brown",
                "releaseDate": "2019-06-15",
                "brand": "Jordan",
                "reviews": []
            },
            {
                "id": 20,
                "title": "Jordan 11 Retro Win Like 96",
                "urlKey": "air-jordan-11-retro-win-like-96",
                "uuid": "7d962d7a-fd3b-47ac-8f6f-b5b61d395b6e",
                "description": "Please note: the Air Jordan 11 Retro Win Like ‘96 sneakers do not include 72 wins and a championship banner (sorry to rub it in Warriors fans). These 11s were part of a historic NBA season for one of the most historic players in the game. Needless to say they are a must own for any MJ fan. The shoe features a mix of patent leather, mesh, and Zoom Air cushioning, and was released in December of 2017 in a full family run of sizes.",
                "marketPrice": 253,
                "retailPrice": 220,
                "imageUrl": "https://stockx.imgix.net/Air-Jordan-11-Retro-Win-Like-96-Product.jpg?fit=fill&bg=FFFFFF&w=700&h=500&auto=format,compress&q=90&dpr=2&trim=color&updated_at=1538080256",
                "styleCode": "378037-623",
                "colorway": "Gym Red/Black-White",
                "releaseDate": "2017-12-09",
                "brand": "Jordan",
                "reviews": []
            }
        ]
    },
    {
        "id": 18,
        "username": "DSDA",
        "email": "k.DDDSDS@gmail.com",
        "password": "SDSD",
        "firstName": "XX",
        "lastName": "kong",
        "dtype": "Editor",
        "featuredProducts": []
    },
    {
        "id": 20,
        "username": "dsds",
        "email": "k.ddddd@gmail.com",
        "password": "SDSD",
        "firstName": "XX",
        "lastName": "kong",
        "dtype": "Editor",
        "featuredProducts": []
    }

]


const output = (edidtors) => {

    var source = edidtors.filter(edidtor => {
        if (edidtor.featuredProducts.length == 0) {
            return false;
        } else {
            return true;
        }
    })
    var finalSource = []
    for (var i = 0; i < source.length; i++) {
        for (var z = 0; z < source[i].featuredProducts.length; z++) {
            var rObj = {};//trick
            var firstName = source[i].firstName;
            var lastName = source[i].lastName;
            var username = source[i].username;
            rObj['firstName'] = firstName;//create a field
            rObj['lastName'] = lastName;
            rObj['username'] = username;
            rObj['featuredProduct'] = source[i].featuredProducts[z];
            finalSource.push(rObj)
        }
    }
    return finalSource;
}

// const editorService = () => {
//    var editorService = EditorService.getInstance();
//    var data = editorService.getAllEditor().then(res => res)
//     console.log(data)
// }

const EditorProductsComponent = ({editorProducts}) => {
    var products = output(editorProducts)
    const classes = useStyles()

    return (
        <Grid container spacing={4}>
            {products.map(card => (
                <Grid item key={card} xs={12} sm={6} md={4}>
                    <Card className={classes.card}>
                        <CardMedia
                            className={classes.cardMedia}
                            image={card.featuredProduct.imageUrl}
                        />
                        <CardContent className={classes.cardContent}>
                            <Typography gutterBottom variant="h5" component="h2">
                                {card.featuredProduct.title}
                            </Typography>
                            <Typography variant="h4">
                                ${card.featuredProduct.marketPrice}
                            </Typography>
                            <Typography variant="h6">
                            by: {card.firstName}
                        </Typography>
                        </CardContent>

                    </Card>
                </Grid>
            ))}
        </Grid>
    )
}


export default EditorProductsComponent;
