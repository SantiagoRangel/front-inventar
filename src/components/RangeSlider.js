import React, { useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Slider from '@material-ui/core/Slider';
import Button from '@material-ui/core/Button';
import InputLabel from '@material-ui/core/InputLabel';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import NativeSelect from '@material-ui/core/NativeSelect'
import lda from '../Images/ldag.png';
import ldanuevo from '../Images/ldanuevo.png';
import wordcloud from '../Images/wordcloudg.png';
import { useHistory, useLocation } from 'react-router-dom';
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
    return `${value}??C`;
}

export default function RangeSlider() {
    const classes = useStyles();
    const history = useHistory();
    const location = useLocation();
    const [value, setValue] = React.useState([1720, 1811]);
    const [state, setState] = React.useState({
        numtopics: 2,
        periodo: 1234,
    });
    const [img, setImg] = React.useState([ldanuevo, wordnuevo]);
    const [checked, setChecked] = React.useState(false);
    const [loading, setLoading] = React.useState(true);

    const handleChange = (event, newValue) => {

        if (newValue[0] === 1720 && newValue[1] === 1811) {
            setState({ ...state, periodo: 1234 })
            //   setImg([lda, wordcloud])
        } else if (newValue[0] === 1720 && newValue[1] === 1770) {
            setState({ ...state, periodo: 1 })

            //   setImg([lda1, wordcloud1])
        } else if (newValue[0] === 1720 && newValue[1] === 1781) {
            setState({ ...state, periodo: 12 })

            // setImg([lda12, wordcloud12])
        } else if (newValue[0] === 1720 && newValue[1] === 1800) {
            setState({ ...state, periodo: 123 })

            //  setImg([lda123, wordcloud123])
        } else if (newValue[0] === 1770 && newValue[1] === 1781) {
            setState({ periodo: 2 })

            //  setImg([lda2, wordcloud2])
        } else if (newValue[0] === 1770 && newValue[1] === 1800) {
            setState({ ...state, periodo: 23 })

            // setImg([lda23, wordcloud23])
        } else if (newValue[0] === 1770 && newValue[1] === 1811) {
            setState({ ...state, periodo: 234 })

            //setImg([lda234, wordcloud234])
        }
        else if (newValue[0] === 1781 && newValue[1] === 1800) {
            setState({ ...state, periodo: 3 })

            // setImg([lda3, wordcloud3])
        } else if (newValue[0] === 1781 && newValue[1] === 1811) {
            setState({ ...state, periodo: 34 })

            // setImg([lda34, wordcloud34])
        } else if (newValue[0] === 1800 && newValue[1] === 1811) {
            setState({ ...state, periodo: 4 })

            // setImg([lda4, wordcloud4])
        }


        setValue(newValue);
    };
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
    const handle = (periodo) => {
        let rta;
        if (periodo == "1") {
            rta = "1720-1770"
        }
        if (periodo == "2") {
            rta = "1770-1781"
        }
        if (periodo == "3") {
            rta = "1781-1800"
        }
        if (periodo == "4") {
            rta = "1800-1811"
        }
        if (periodo == "12") {
            rta = "1720-1781"
        }
        if (periodo == "123") {
            rta = "1720-1800"
        }
        if (periodo == "1234") {
            rta = "1720-1811"
        }
        if (periodo == "23") {
            rta = "1770-1800"
        }
        if (periodo == "234") {
            rta = "1770-1811"
        }
        if (periodo == "34") {
            rta = "1781-1800"
        }
        return rta;
    }
    useEffect(() => {
        const paramsQuery = parseQuery(location.search);
        console.log(paramsQuery)
        if (paramsQuery.coh) {
            let pe = handle(paramsQuery.coh)
            setState({ ...state, coh: pe, numdocs: paramsQuery.numdocs })
        }
    }, []);
    const postLDA = () => {
        setLoading(false);
        let data = { numtopics: state.numtopics, periodo: state.periodo }
        console.log(data)
        axios.post("/LDA", data)
            .then((response) => {
                console.log(response.data);
                setLoading(true)
                setState({ ...state, coh: response.data })
                //history.push('/coherence?coh='+ response.data)
                window.location.href = '/coherence?coh=' + response.data.periodo + '&numdocs=' + response.data.numdocs;
                //  window.location.reload();
            })
            .catch(function (error) {
                console.log(error);
            });
    };
    return (
        <div>
            <div >
                <div className="row">
                    <div className="col-6">
                        <h1>Linea del tiempo</h1>
                        <p>
                            Uno de los objetivos del proyecto const?? en poder ver como cambian las tem??ticas presentes en los textos analizados en el tiempo. Para esto se tiene la siguiente interfaz donde se puede escoger variantes rangos de fechas para poder identificar como cambian las tem??ticas a trav??s del tiempo en este conjunto de documentos.
                        </p>
                        <p>
                        Para poder explorar la herramienta escoja un rango de fechas e ingrese un n??mero de t??picos (esencial escoger un n??mero). Luego dar click en obtener resultados y esperar que la herramienta ejecute el modelo. Finalmente, si lo desea puede cambiar la visualizaci??n a un wordcloud dando click en cambiar de visualizaci??n. Los resultados pueden demorar alrededor de un minuto en ser obtenidos.                       </p>
                    </div>
                    <div className="col-6">
                        <div className={classes.root}>
                            <Typography id="range-slider" gutterBottom>
                                Rango de fechas
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
                        <div className="row">
                            <div className="col-5">
                                <FormControl className={classes.formControl, 'input'}>
                                    <InputLabel htmlFor="age-native-helper">N??mero de T??picos</InputLabel>
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
                                    <FormHelperText>N??meros extremos traen peores resultados</FormHelperText>
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
                            Cambiar Visualizaci??n
                        </Button>
                    </div>
                </div>



            </div>
            {state.coh ? <h5>Periodo: <h3>{state.coh}</h3> </h5> : ""}
            {state.numdocs ? <h5>N??mero de Documentos Analizados: <h3>{state.numdocs}</h3> </h5> : ""}
            <div className="row">


                <div id="rami" className="col-6">
                    {checked ? <img className="wordcloudperiodo" src={img[1]}></img> : <img className="lda" src={img[0]} />}

                </div>
                <div className="col-6">


                </div>
            </div>
        </div>

    );
}