import React, { Component } from 'react';
import { ResponsiveBar } from '@nivo/bar';
import Header from './Header';
const data = [
    {
        "Etiqueta": "MISC",
        "conteo": 1980,
        color: "#8C9F5A"

    },
    {
        "Etiqueta": "LOC",
        "conteo": 1349,
        color: "#DFB459"

    },
    {
        "Etiqueta": "ORG",
        "conteo": 940,
        color: "#DF7536"

    },
    {
        "Etiqueta": "PER",
        "conteo": 301,
        color: " #B3365B"

    },


];



const data2 = [
    {
        "Etiqueta": "Orinoco LOC",
        "conteo": 49,
        color: "#DFB459"

    },
    {
        "Etiqueta": "Caribes LOC",
        "conteo": 42,
        color: "#DFB459"

    },
    {
        "Etiqueta": "la Luna LOC",
        "conteo": 31,
        color: "#DFB459"

    },
    {
        "Etiqueta": "Magestad PER",
        "conteo": 29,
        color: " #B3365B"

    },
    {
        "Etiqueta": "Misiones LOC",
        "conteo": 25,
        color: " #DFB459"

    },
    {
        "Etiqueta": "Europa LOC",
        "conteo": 21,
        color: " #DFB459"

    },
    {
        "Etiqueta": "Cielo PER",
        "conteo": 20,
        color: " #B3365B"

    },
    {
        "Etiqueta": "Cacique MISC",
        "conteo": 20,
        color: " #8C9F5A"

    },
    {
        "Etiqueta": "las Naciones ORG",
        "conteo": 19,
        color: " #DF7536"

    },
    {
        "Etiqueta": "Nacion MISC",
        "conteo": 19,
        color: " #8C9F5A"

    },
    {
        "Etiqueta": "Misionero MISC",
        "conteo": 18,
        color: " #8C9F5A"

    },
    {
        "Etiqueta": "Islas LOC",
        "conteo": 17,
        color: " #DFB459"

    },
    {
        "Etiqueta": "Mundo ORG",
        "conteo": 16,
        color: " #DF7536"

    },
    {
        "Etiqueta": "Misioneros LOC",
        "conteo": 15,
        color: " #DFB459"

    },
    {
        "Etiqueta": "Criador PER",
        "conteo": 14,
        color: " #B3365B"

    },
    {
        "Etiqueta": "Pueblo MISC",
        "conteo": 14,
        color: " #8C9F5A"

    },
    {
        "Etiqueta": "España LOC",
        "conteo": 14,
        color: " #DFB459"

    },
    {
        "Etiqueta": "Padres Misioneros ORG",
        "conteo": 13,
        color: " #DF7536"

    },
    {
        "Etiqueta": "Americanos LOC",
        "conteo": 12,
        color: " #DFB459"

    },
    {
        "Etiqueta": "Gentiles MISC",
        "conteo": 12,
        color: " #8C9F5A"

    },


];

class NER extends Component {
    render() {
        return (
            <div>
                <Header>

                </Header>
                <div className="container-fluid">

                    <div className="container">
                        <h1>
                            Reconocimiento de Entidades Nombradas
                        </h1>
                        <p>
                            Para este modelo se implementó un proceso de reconocimiento de entidades nombradas. Esto significa que un modelo de procesamiento de lenguaje natural se encargó de analizar los documentos en términos semánticos y sintácticos para poder extraer entidades dentro de los docuemntos que fueron etiquetados con las siguientes etiquetas: MISC: miscelanea (Entidades que no caben en las otras categrorías), PER : personas, LOC: locaciones, ORG: oganizaciones. Los resultados obtenidos se muestran a continuación. Es importante hacer la aclaración de las varias limitantes para esta implementación (para más información, leer el documento de tesis).
                        </p>
                    </div>
                    <div className='divchart'>

                        <ResponsiveBar
                            data={data}
                            keys={['conteo']}
                            indexBy="Etiqueta"
                            margin={{ top: 50, right: 130, bottom: 50, left: 60 }}
                            padding={0.3}
                            valueScale={{ type: 'linear' }}
                            indexScale={{ type: 'band', round: true }}

                            borderColor={{ from: 'color', modifiers: [['darker', 1.6]] }}
                            axisTop={null}
                            axisRight={null}
                            axisBottom={{
                                tickSize: 5,
                                tickPadding: 5,
                                tickRotation: 0,
                                legend: 'Etiqueta',
                                legendPosition: 'middle',
                                legendOffset: 32
                            }}
                            axisLeft={{
                                tickSize: 5,
                                tickPadding: 5,
                                tickRotation: 0,
                                legend: 'Conteo',
                                legendPosition: 'middle',
                                legendOffset: -40
                            }}
                            colors={data.map(c => c.color)}
                            colorBy="index"
                            labelSkipWidth={12}
                            labelSkipHeight={12}
                            labelTextColor={{ from: 'color', modifiers: [['darker', 1.6]] }}
                            legends={[
                                {
                                    dataFrom: 'keys',
                                    anchor: 'bottom-right',
                                    direction: 'column',
                                    justify: false,
                                    translateX: 120,
                                    translateY: 0,
                                    itemsSpacing: 2,
                                    itemWidth: 100,
                                    itemHeight: 20,
                                    itemDirection: 'left-to-right',
                                    itemOpacity: 0.85,
                                    symbolSize: 20,
                                    effects: [
                                        {
                                            on: 'hover',
                                            style: {
                                                itemOpacity: 1
                                            }
                                        }
                                    ]
                                }
                            ]}
                            animate={true}
                            motionStiffness={90}
                            motionDamping={15}
                        />
                        <ResponsiveBar
                            data={data2}
                            keys={['conteo']}
                            indexBy="Etiqueta"
                            margin={{ top: 50, right: 130, bottom: 50, left: 60 }}
                            padding={0.3}
                            valueScale={{ type: 'linear' }}
                            indexScale={{ type: 'band', round: true }}

                            borderColor={{ from: 'color', modifiers: [['darker', 1.6]] }}
                            axisTop={null}
                            axisRight={null}
                            axisBottom={{
                                tickSize: 5,
                                tickPadding: 5,
                                tickRotation: 0,
                                legend: 'Etiqueta',
                                legendPosition: 'middle',
                                legendOffset: 32
                            }}
                            axisLeft={{
                                tickSize: 5,
                                tickPadding: 5,
                                tickRotation: 0,
                                legend: 'Conteo',
                                legendPosition: 'middle',
                                legendOffset: -40
                            }}
                            colors={data2.map(c => c.color)}
                            colorBy="index"
                            labelSkipWidth={12}
                            labelSkipHeight={12}
                            labelTextColor={{ from: 'color', modifiers: [['darker', 1.6]] }}
                            legends={[
                                {
                                    dataFrom: 'keys',
                                    anchor: 'bottom-right',
                                    direction: 'column',
                                    justify: false,
                                    translateX: 120,
                                    translateY: 0,
                                    itemsSpacing: 2,
                                    itemWidth: 100,
                                    itemHeight: 20,
                                    itemDirection: 'left-to-right',
                                    itemOpacity: 0.85,
                                    symbolSize: 20,
                                    effects: [
                                        {
                                            on: 'hover',
                                            style: {
                                                itemOpacity: 1
                                            }
                                        }
                                    ]
                                }
                            ]}
                            animate={true}
                            motionStiffness={90}
                            motionDamping={15}
                        />
                    </div>
                </div>
            </div>

        );
    }
}

export default NER;