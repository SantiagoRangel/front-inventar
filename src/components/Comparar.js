import React, { useEffect } from 'react';
import Header from './Header';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Slider from '@material-ui/core/Slider';
import Button from '@material-ui/core/Button';
import InputLabel from '@material-ui/core/InputLabel';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import { useHistory, useLocation } from 'react-router-dom';
import Select from '@material-ui/core/Select';
import NativeSelect from '@material-ui/core/NativeSelect'
import lda from '../Images/ldag.png';
import ldanuevo from '../Images/ldanuevo.png';
import wordcloud from '../Images/wordcloudg.png';
import wordnuevo from '../Images/wordnuevo.png';
import lda1 from '../Images/lda1.png';
import lda2 from '../Images/lda2.png';
import lda3 from '../Images/lda3.png';
import lda4 from '../Images/lda4.png';
import lda12 from '../Images/lda12.png';
import lda123 from '../Images/lda123.png';
import lda23 from '../Images/lda23.png';
import lda234 from '../Images/lda234.png';
import lda34 from '../Images/lda34.png';
import wordcloud1 from '../Images/wordcloud1.png';
import wordcloud2 from '../Images/wordcloud2.png';
import wordcloud3 from '../Images/wordcloud3.png';
import wordcloud4 from '../Images/wordcloud4.png';
import wordcloud12 from '../Images/wordcloud12.png';
import wordcloud123 from '../Images/wordcloud123.png';
import wordcloud23 from '../Images/wordcloud23.png';
import wordcloud234 from '../Images/wordcloud234.png';
import wordcloud34 from '../Images/wordcloud34.png';
const axios = require('axios');
var Loader = require('react-loader');
const useStyles = makeStyles({
    root: {
        width: 500,
    },
});

const marks = [
    {
        value: 1720,
        label: '1720',
    },
    {
        value: 1770,
        label: '1770',
    },
    {
        value: 1781,
        label: '1781',
    },
    {
        value: 1800,
        label: '1800',
    },
    {
        value: 1811,
        label: '1811',
    },
];

function valuetext(value) {
    return `${value}°C`;
}

export default function Comparar() {
    const classes = useStyles();
    const [value, setValue] = React.useState([1720, 1811]);
    const [value2, setValue2] = React.useState([1720, 1811]);
    const location = useLocation();

    const [state, setState] = React.useState({
        numtopics: 2,
        periodo1: 1234,
        periodo2: 1234,

    });
    const [img, setImg] = React.useState([ldanuevo, wordnuevo]);
    const [img2, setImg2] = React.useState([lda1, wordcloud1]);

    const [checked, setChecked] = React.useState(false);
    const [loading, setLoading] = React.useState(true);
    const handleChange = (event, newValue) => {

        if (newValue[0] === 1720 && newValue[1] === 1811) {
            setState({ ...state, periodo1: 1234 })
            //   setImg([lda, wordcloud])
        } else if (newValue[0] === 1720 && newValue[1] === 1770) {
            setState({ ...state, periodo1: 1 })

            //   setImg([lda1, wordcloud1])
        } else if (newValue[0] === 1720 && newValue[1] === 1781) {
            setState({ ...state, periodo1: 12 })

            // setImg([lda12, wordcloud12])
        } else if (newValue[0] === 1720 && newValue[1] === 1800) {
            setState({ ...state, periodo1: 123 })

            //  setImg([lda123, wordcloud123])
        } else if (newValue[0] === 1770 && newValue[1] === 1781) {
            setState({ ...state, periodo1: 2 })

            //  setImg([lda2, wordcloud2])
        } else if (newValue[0] === 1770 && newValue[1] === 1800) {
            setState({ ...state, periodo1: 23 })

            // setImg([lda23, wordcloud23])
        } else if (newValue[0] === 1770 && newValue[1] === 1811) {
            setState({ ...state, periodo1: 234 })

            //setImg([lda234, wordcloud234])
        }
        else if (newValue[0] === 1781 && newValue[1] === 1800) {
            setState({ ...state, periodo1: 3 })

            // setImg([lda3, wordcloud3])
        } else if (newValue[0] === 1781 && newValue[1] === 1811) {
            setState({ ...state, periodo1: 34 })

            // setImg([lda34, wordcloud34])
        } else if (newValue[0] === 1800 && newValue[1] === 1811) {
            setState({ ...state, periodo1: 4 })

            // setImg([lda4, wordcloud4])
        }


        setValue(newValue);
    };
    const handleChange3 = (event, newValue) => {

        if (newValue[0] === 1720 && newValue[1] === 1811) {
            setState({ ...state, periodo2: 1234 })
            //   setImg([lda, wordcloud])
        } else if (newValue[0] === 1720 && newValue[1] === 1770) {
            setState({ ...state, periodo2: 1 })

            //   setImg([lda1, wordcloud1])
        } else if (newValue[0] === 1720 && newValue[1] === 1781) {
            setState({ ...state, periodo2: 12 })

            // setImg([lda12, wordcloud12])
        } else if (newValue[0] === 1720 && newValue[1] === 1800) {
            setState({ ...state, periodo2: 123 })

            //  setImg([lda123, wordcloud123])
        } else if (newValue[0] === 1770 && newValue[1] === 1781) {
            setState({ ...state, periodo2: 2 })

            //  setImg([lda2, wordcloud2])
        } else if (newValue[0] === 1770 && newValue[1] === 1800) {
            setState({ ...state, periodo2: 23 })

            // setImg([lda23, wordcloud23])
        } else if (newValue[0] === 1770 && newValue[1] === 1811) {
            setState({ ...state, periodo2: 234 })

            //setImg([lda234, wordcloud234])
        }
        else if (newValue[0] === 1781 && newValue[1] === 1800) {
            setState({ ...state, periodo2: 3 })

            // setImg([lda3, wordcloud3])
        } else if (newValue[0] === 1781 && newValue[1] === 1811) {
            setState({ ...state, periodo2: 34 })

            // setImg([lda34, wordcloud34])
        } else if (newValue[0] === 1800 && newValue[1] === 1811) {
            setState({ ...state, periodo2: 4 })

            // setImg([lda4, wordcloud4])
        }


        setValue2(newValue);
    };
    const handle = (periodo)=>{
        let rta;
        if(periodo == "1"){
            rta = "1720-1770"
        }
        if(periodo == "2"){
            rta = "1770-1781"
        }
        if(periodo == "3"){
            rta = "1781-1800"
        }
        if(periodo == "4"){
            rta = "1800-1811"
        }
        if(periodo == "12"){
            rta = "1720-1781"
        }
        if(periodo == "123"){
            rta = "1720-1800"
        }
        if(periodo == "1234"){
            rta = "1720-1811"
        }
        if(periodo == "23"){
            rta = "1770-1800"
        }
        if(periodo == "234"){
            rta = "1770-1811"
        }
        if(periodo == "34"){
            rta = "1781-1800"
        }
        return rta;
    }
    const handleChange2 = (event) => {
        setState({
            ...state,
            numtopics: event.currentTarget.value
        })
    }
    const handleToggle = () => {
        setChecked(!checked)
        console.log(checked)
    }
    const parseQuery = (queryString) => {
        var query = {};
        var pairs = (queryString[0] === "?"
        ? queryString.substr(1)
        : queryString
        ).split("&");
        for (var i = 0; i < pairs.length; i++) {
            var pair = pairs[i].split("=");
            query[decodeURIComponent(pair[0])] = decodeURIComponent(pair[1] || "");
        }
        return query;
    };
    useEffect(() => {
        const paramsQuery = parseQuery(location.search);
        console.log(paramsQuery)
        if(paramsQuery.coh){
            let pe = handle(paramsQuery.coh)
            setState({...state, coh:pe, numdocs:paramsQuery.numdocs})
        }
    }, [] );
    useEffect(() => {
        const paramsQuery = parseQuery(location.search);
        console.log(paramsQuery)
        if(paramsQuery.coh1 && paramsQuery.coh2){
            let pe1 = handle(paramsQuery.coh1)
            let pe2 = handle(paramsQuery.coh2)
            setState({...state, coh1:pe1, coh2: pe2, numdocs1: paramsQuery.numdocs1, numdocs2: paramsQuery.numdocs2})
        }
    }, [] );
    const postLDA = () => {
        setLoading(false);
        let coherencia;
        let data = { numtopics: state.numtopics, periodo: state.periodo1 }
        console.log(state)
        axios.post("/LDA", data)
            .then((response) => {
                periodo1 = response.data.periodo;
                numdocs1 = response.data.numdocs;
                setState({ ...state, coh1: response.data })
                let data = { numtopics: state.numtopics, periodo: state.periodo2 }
                axios.post("/LDA2", data)
                    .then((response) => {
                        setState({ ...state, coh2: response.data })
                        setLoading(true)
                        window.location.href = '/comparar?coh1='+ periodo1+'&coh2='+response.data.periodo+'&numdocs1='+numdocs1+'&numdocs1='+response.data.numdocs;

                      /*   navigation.navigate('Coherence', {
                            coh: response.data
                            
                          }); */
                        //window.location.reload();
                    })
                    .catch(function (error) {
                        console.log(error);
                    });
            })
            .catch(function (error) {
                console.log(error);
            });
    };
    return (
        <div>
            <Header>

            </Header>
            <div className="container">

                <div>
                    <div >
                        <div className="row">
                            <div className="col-5">
                                <Typography id="range-slider" gutterBottom>
                                    Rango de fechas 1
                                </Typography>
                                <Slider
                                    value={value}
                                    onChange={handleChange}
                                    aria-labelledby="range-slider"
                                    getAriaValueText={valuetext}
                                    max={1811}
                                    min={1720}
                                    step={null}
                                    marks={marks}
                                />
                            </div>
                            <div className="col-1">

                            </div>
                            <div className="col-5">
                                <div className={classes.root}>
                                    <Typography id="range-slider" gutterBottom>
                                        Rango de fechas 2
                                    </Typography>
                                    <Slider
                                        value={value2}
                                        onChange={handleChange3}
                                        aria-labelledby="range-slider"
                                        getAriaValueText={valuetext}
                                        max={1811}
                                        min={1720}
                                        step={null}
                                        marks={marks}
                                    />

                                </div>


                            </div>
                        </div>
                        <div className="row">
                            <div className="col-3">
                                <FormControl className={classes.formControl, 'input'}>
                                    <InputLabel htmlFor="age-native-helper">Número de Tópicos</InputLabel>
                                    <NativeSelect
                                        value={state.age}
                                        onChange={handleChange2}

                                    >
                                        <option value={1}>1</option>
                                        <option value={2}>2</option>
                                        <option value={3}>3</option>
                                        <option value={4}>4</option>
                                        <option value={5}>5</option>
                                        <option value={6}>6</option>
                                        <option value={7}>7</option>
                                        <option value={8}>8</option>
                                        <option value={9}>9</option>
                                        <option value={10}>10</option>
                                        <option value={11}>11</option>
                                        <option value={12}>12</option>
                                        <option value={13}>13</option>
                                        <option value={14}>14</option>
                                        <option value={15}>15</option>

                                    </NativeSelect>
                                    <FormHelperText>Números extremos traen peores resultados</FormHelperText>
                                </FormControl>

                            </div>
                            <div className="col-7">

                                <Button className="res" checked={checked}
                                    value="1"
                                    onClick={postLDA}
                                    variant="contained"
                                    color="secondary"
                                    disabled={!loading}>
                                    Obtener Resultados
                                </Button>
                                <Loader className="loader" loaded={loading} lines={13} length={20} width={10} radius={30}
                                    corners={1} rotate={0} direction={1} color="#000" speed={1}
                                    trail={60} shadow={false} hwaccel={false} className="spinner"
                                    zIndex={2e9} top="50%" left="50%" scale={1.00}
                                    loadedClassName="loadedContent" />
                            </div>
                        </div>
                        <Button className="cambiar" checked={checked}
                            value="1"
                            onClick={handleToggle}
                            variant="contained"
                            color="primary">
                            Cambiar Visualización
                        </Button>

                    </div>
                    <h5>Puntaje de Coherencia: <h3>{state.coh1}</h3> </h5>
                    <div className="row">
                    
                        <div id="rami" className="col-6">
                            {checked ? <img className="wordcloudperiodo" src={img[1]}></img> : <img className="lda" src={img[0]} />}

                        </div>
                        <div className="col-6">


                        </div>
                    </div>
                    <h5>Puntaje de Coherencia: <h3>{state.coh2}</h3> </h5>

                    <div className="row">
                        <div id="rami" className="col-6">
                            {checked ? <img className="wordcloudperiodo" src={img2[1]}></img> : <img className="lda" src={img2[0]} />}

                        </div>
                        <div className="col-6">


                        </div>
                    </div>
                </div>

            </div>
        </div>


    );
}