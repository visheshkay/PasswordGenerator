import React from 'react'
import { StyleSheet, Text, View,Image } from 'react-native'

export default function FancyCard() {
    return (
        <View style={styles.maincont}>
            <Text style={styles.headingText}>Fancy Cards</Text>
            <View style={[styles.card,styles.elevated]}>
                <Image source={{uri:'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMTU3Ojo6Iys/RD84QzQ5OjcBCgoKDQwNGg8PGjclHyU3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3N//AABEIAJQAlAMBIgACEQEDEQH/xAAcAAACAgMBAQAAAAAAAAAAAAAEBQMGAAECBwj/xAA6EAACAQMDAQYDBgUEAgMAAAABAgMABBEFEiExBhNBUWFxIoGRFCMyobHRBxVCwfAWM1Ji4fFDgpL/xAAYAQADAQEAAAAAAAAAAAAAAAABAgMABP/EACARAAICAwADAQEBAAAAAAAAAAABAhEDEiEiQVExEzL/2gAMAwEAAhEDEQA/APG2XLkedNn7yzsbiOSFXgnAVSwwUcHORz1B+oPrwrckyEAZ8MYppc3Ud3p82+Mxukyuo8GHQj3zk+1EX0K8YNdp1rjPlXSnmnECI6Otz0oBDRML+Zoi0PLUbsCndnbYAeQqi5xljgUl092j3GQcpjjoSab288Mu0XBDAD4PJaVs2t/pZNPtoski5hGBkFfi5/SnEd9Z2cxDyiVsD4lBOeen+elVPTtTmiaSN445E/pYHHH+fpR636FlSe4jgRmGNvUUjspFKP4WhruytrSeZY7go0Z3Myk8fOqgvfXlpboqH7tiY5D0Ckk0/FzaPavB9pDxspVm3DJznNVaK+ayuJLaGX7RApwhHlnqKy4M1f6ESneGB/EpwwHnS+eM+FEx3hmvXhbxXK+uPP8Azwrm4Bx0p0zncaYpmjod4jg4o2ReahYcVmxkhZP8IwBS+Xn0pzfw/dqw/qXP51HpcscY1DeoJ+xS7SSOuOOp/Spl0JAlZXJkYE5YVlambgf2P0qDW+0cVrfLK8G1t3c4DcIzA9PwjbyceXnSy4jMUM6MpjZZMFHBDDBIxj9xTbs32mk0a3kgS2EjPI0gkWZ4yCU7vBxwRtJ+ZqLXZpNQlluZZJJLueTvZtykDdzwD4gLtA/QVvZl1CEVsda6C5Awc5qRYjxzzVLJGIaY6cgaYPIvwqRUNtZd66L3gXccEk8LR8AWJI0wFcHPw8knP98ULMkzp8TEEsQynqp5xUZluYM4kOwHByc0302PTbdN9/iaUSbWhAIx9OW6Hy+dWK3/ANMXamC40sbpDsEkDOobPOQcnHGKm5pFVjbK3p15jBjI54Kn+k/tR8UxLd8Y08m2v1+vuaO1nsk+liG90fvLm0uFxENhaSNh1DY6jjg+/HHKz7Dq1tIzzWE4DJvX7ts+54oqSF1aJotWuGLstoDg7Vy/HvXE+ouG3PEEby/vmoV+2XULGK1mAwA8uw7FJHifShLpdixxSMSyjLMB5n9qxjE1Mpdx3BONrZPtT4TrOgMTb8jIx41UJrZ9veIAy8BjngHJA+uDTTSLia0iXu1Uypl1bqADkfvRsDVjSRDhWIIVjwcdainxFCMEEk8VwmpxXE6yXMuZIsAoR8Jx1wM8AeVR3N8gUCJApMmSSfoP1pXIZIgnkaSPZgnGSMDwqHSO6J1LvHjTFjNtMhXk46DPj5Y5rclwwEgR+WXaSeeD1xmpdCkltjqU0DlGWyl2uPPHA58zxQsehDJ3Xw5wDjkcedZWkgVRjZwOnHSt0djasAiQB9+WDK+AVPI4P7UzuI5LO3uZO5lRWxGh3ZQk43ZHiCM+x9RQEKkyAEnByae9opom0e2gVgWjKjg8Hrz0B8fWg35IMV4NlZU8+3lUwyWUDIyM5NRHrRlugfAAJNVfCFWEWQeOZXBHGec+NE28bq6SEjqM5GePap7GylkZF2klvwgDrTdrrRuzs9hLcRfzWdiJJ4AcRRx44AOeXJwcngCpuXoqo+yowXLwpJBICHU4Ytk5Oeaf6HfW6hXdUSDpI2wFt2Pr/wC6WW8kF3ey3bwrEk87MYk/DECc7RnnHNXGGPT7e0GFiywGzbglv8+Vc+XLryjqw4N+2Xfsh2h0yytMR30f2ZQpYSLygyVOfy5pnpeoxWPa37BHuihvQXjiXEkLjB+ONgfhzxleOntXmep2/wDp6wv8Sg/zHuWUbcEKRu4+efpSOx1u6hkintJCgtmJUhzgZ6gDw+X5c5CfLBKCs+lru7tLVGFw0aRd27uWxt2jGc/WvCv4k2MNndwXWlNG+k6gpe3aPorr+JPl1Hz8qn7Q9qLrtDYwRSZiCjJYcb+OMjy4pfpLT612a1PRwHlmtMXdvEilmO04cADJ5BPQVVTlfUSeNalX76RYtqkHPhxyR0/vULwkOBGQvPC55HNM49ttEWBO9wM8cDFAlMyb1JLFqpZKjLZXDFs8ZFdu7nJBGfUA10v3aHzzUDMS4J4GaDCHLBL3D3G0iJcKWIwAT4E9M0Xok5RdVw7BVsJS2wFsjb44H5+FLYy0iSqBk9fkMk0boaqP5izKXYWUhC4BU4HII8f89wB0LTPGhIOT8j+1ZQYUc4PHq1ZRpAtnEC4kLYzgGnPa2KIdwYXUgAFgG8SooKxl7m4SWMRqVPBlTd59Qc+dE3kEQ0tnjdCN4Krgj9R71O/JMevBoQqM0y0xC0m0A4JrmGEu6tGvQ84WmukCKGfa3VT1FPKXCUIdLUNQtn7L3UVtDbQXttbGNnz97KjsokYcY/DkeeCa83vGLuXHhxVq1F4TC7Djk7MdRn96r77Nm115H51GEjpnDlGtD1COymlMrugxlSn4s48Perrp+t6VaaTpffKxfY3ev3bfdknxb59K84kQCQ5PsAKb9m4hqVz9kubmQRIpkKkkqwHhzx1xRy4oyVgw5nHxGnbzUZNS1e0nZCkItFEAbrsyRz74z7YoXQNOl1O5MdthgkZllLsFEag+JPHlQvabWDq2pLL8JjhQRpjoRnPHpSk3DrE8SEhHxvGeGx0z7U2OHihMk0ptovdhYX2tXj2ulx/a5o1+LuiCoHv0qx6J2Z7Tad2jsL650lltkRYJ+7AIMWNrZAPJIyT5mvLdL1nUNLYnT7uWAnqYzgmrPp/8RO09qoI1WVseEgDZpmn+CxaHnbzQzpHaK4aVJZLS6JuEkZTgbiSQx6ZBzxVaEHeyD7MpcY4I8asVv/GLXovhuIbS5T/tHg/lVh7Naj/rPSLjUoYoLTXNNkLZtIQDLGQeCvjxnnzoOwpUebumOvJoaUdadTQtdyytE6cbsEjYPPpjyNA/ZXkJwMEgYGetZMzRxpqKZFEztHGQ25h4DBqbSY22ahgnAspWKiVkBwPT8Xj8J4PpWLBNFtkdFKHoGPp44OfE1ElxLa71gk2d5GY32kHKnqKJgOKBdp+EcGsrsSumenPPUVla2bhBDkEZQexou5djZd2Rkd6CvpwaJFgDKgeZY0bPxKN+OPIVLc6ey2ZlaaDCnO0OCT9KT2M/8sB0tAsgJ456+dGlEghe4ON27HFCROkcWNp6/lTaxIad4BtkTO0sOVYVskqVmxLZ0V6ad5WO44APFA3Uo6cs3pV31fstad2JrOcxHG5o2GRjxI8v0qkag0LXMzWgZYt3wAnJxQxSjJWhsylHgGXO/dnBrQdlOUdlPPKnHUYNaKszVJFbSTSpHGpZmOAB410cOTpFg8knA8K1nNWW27OovN9Juf8A4IeB7mnn8us7WJZYbaJVJA5GTnb6+xpdx/5soUMMsxxDFLIfKNC36UWmk6m4ylnNj/thf1NXWS4+7Cg/COgrgz4OM0HNhUCk3NrdWgU3UDxBjgEkEH6Uy7Ldo73s5fvdWD4kZACCeDhgRn8x8zVglkjmjaKZFeNhhgaqOqWX2C8ZFy0bcxNjw8qKdga16es6tbWOqaXD2m0mFu4vCe9jQf7MvRlPoSMj3PmKqcyjcwI255X0qf8AhNr8Fpf3Gh6qc6XqELgqTwHAz9SAfmK613SZdH1Frd5TNFjdDMvSSM/hb/PGkaodOwB23SsMAA4/Dx4YoSdeDj9KOggLHdIW2442AE/maHkj+MjOB6ihYaB5UzHB8S57seHqayiwkDKoaRMqMdG/aso2ag2CGUD4VDUX9nuJomiFrHll27sDI+dO7PTGVsFiw8crTmy09g6FRuUHoVzUHIvojzu+0i5trR5pIlEajru8TxROiw4t9wH3h4UfOrN/EV2gsrG1wgM8pfgeC/8Akig+xloLnU40CnZChlb3Bwo+v6Us5OUSmGKj0VdrorrSdJAmbE1yTGp3c46t+Vefnyq6/wAVb77R2nFkpO21gUHHgzfEfy21UWhTGQTjzNXxxUYnNkk5yBQDu4r0TsH2YN1pkt/cQ8yMVibOMqOpHpmqloFkk96Xk5RDsjU/1SMDsH5Gveo7cWVlDbW8QSKKMIo9hihlnykHFDtsqcnZiDbu2bR6E1D/ACOMDY4LgcjNWmVieGwD7gUK+CcM5OPDAI+tQUmX1RXTodsR/t/nUb6HCc4j588n96sTRsTxnB9KiMRVsCXAPUbqOzNqitf6eLNxIg9lNB612SkubF1jkDTr8UeR1Pl86ucaIX2hsgDrXRiZiV2kEjhhWU2nYHBM8IgaW2uFlXdHLG/zUg16b2DnXtRBdaPdRhpbZTPZydCAT8ae3Qjy5pP227MvD3ur2h3JkNcIBjb5sP7/AFoTQItZ7PiDXrdTbwO20sx52+q/8Sa6HJSVnOouLZZdT0Y2wKqhDZ5yOnvSW5tZeQuPlXoNhquidqCptLxEv5FLPasTkN1bHmPGgNR0IRM25TkdeKn1D8Z5+bO4/wC31rKtDaYgYgtj0yKym2Nqy0adcbnIEyeuGp3FJ8PD5xz1rzFe0ptFJaUFx4oMUDe9tNRlBW3mkUf8gelS0bG/okM/4g3bSdp4YmYlILZQq+GWJJ/tTzsbd2On6TJNPdQpPO+W3OAQo4H9z8686S4u725e5upWkmYj45OSQOgqGeEyN/tA5PJNMoG34b7RXP2/tbqU8bh0luTtYcgqAFB+gFQywHb8I6edHWGkSNIHTknrxVhg7NGcBpiUQjqGHFUlNfhOMH+knZS17N6dDBf3t3BJqBAcCRuIT4YHn61bLjtTpp6XqFT12sCVpLb9jdMCiRnV8HIxQ2pdjdNudwheeGTzypBqLcW+lkpJDaTtFp0jpCsxcucDaMj5+VTx3EcjYjclSOqOgA9OapTdhLlWxDf7iPw7gy4/OmFr2P1eMKn2wYB8H3Gs1H6BOXwte9lIO5GT/iTz9RXE3dlWP3aN1G6QAGq+3ZHVGJB1GdFP9SORn6VsdiIztN7c3NwQf65WOPqaXx+j+XwZu1u7kmVFfoCXDAfQ1v7VHAAn2y2UHycZ+maVy9iNN7zMTFcdQc81InZ63sxmBkjY/wBWM1vH6ZbfAibWbK0ISS8hQvkYdc7qS9u9ZtP5SLCfdM9yu5WiIAQrgqTnwz+lNprOKaPbd7Z1IwVb8P0NLhoujCXcbOF8eBdqaLiugmpUUCyunglV4nKMMYdGwfqK9Q0ztxHeWcUd0ba3YHa7SKxULjoijx6ZyR480tmsNKbj+WWhA84l/bNRR2mkwsJF0+AODkErnH1qrmmRWNr2WaOK1vI1mW7jfd1ZJMDPtnj28KykKXqxjaiEL5LwPpWVOmOU1tkuS45NT20EQIwuT611HFHJ1P5UTHbRggjcR6HFVZJIJjhSUYVjvxgYHSirXTE/+Qkt6nNRQyQxjB+79Q3NdS3dsMAyk/PNSZT8GkKJb/hXGPIVKupYwpO3HAzSkXYkTEZdh/Tiuooy+DIZAvgcBj9MjP1oUPfweRX6FVDkscZVtuOPeiVvEf8A3A5FQzWayNAIbpDJ3ACLMvd5HgB1Gfc/OoY+8SR1YEMh2spGCp8j61nCgqdjSOaEkHNTNdp4Nj1FIJrpUkUSOq56ZOM1kl2sK5bjBAHjk0mpRNj/APmaJxuY/Ko31IEHA4PpSL7WWRW3gAj+kZrpZ2YfDKPfu62odhhNeM/Iz+YoVrx8kMpI8qWi8FwnwXhYqSpZFwCR5Amo5pmyAbr6x1kgSbXAi4kZizEPn3oSa5xhWEgz481EzRtz9rZf/r1qNppE/DdbvLMdUSJSZqW7Abac+mQaHluGHRx8mrJbrPBJJ9COflQMzgA/dnHtiqJEmyU3L5/3B/8AqsoDcD0XHuKym1E2BobqXcdwPypjbzkjy+dJo4wW96mjXuzkhlbwBPWmaFTY7Mzqudscin/qOKiWQM3wwgk/8RQkTCQhZE2E+IPSiEtVH4ZiefAgUg92GQu+3AhnPoBimFvKx4YNH5ZIoGNVjwrSMB6nFdzW9s65KuSP6lNK0UXEWHVJQvcNGS26PqDzR11dibR4plwZxbYl+LOdrYBPmQpAqtz3lmt3Zx3bSQxiEMWYhsjnHqM4oY6zLvd4khSIoY1i27wqkgnnPJOBz/6p0kuk3K+Emqs17YyQySB3zuXBLbeOhOKhN+dQt0xw6xlTx1c8Z9wA31qNtRlMOyMoqg7sAck+5oW3mMAG1B+Itx5mpuNvh2Ys8YxqXoKkuI5Xs++bdEylWiLfDkKeo881JDfmK1uUtsiGV+7tmJ/Dng49M5oFkgkdXwBgklWGck9aiJSKUHYxiX8GwZI9MUFD6UyZ4ccPQRpU32S8urBwGBPeRtjJ/wAxj6UXcNkn4Qw9BSmYbrmK53CPZ1zyTU7XqNyHSmUTmzZVKVhILjw2/OuHZF/FLIpPUAE0BcXExH3YU+oNBC4lJPecfKnUTnc6GkkyjpIx9xQ7zeWfrQ6s7HgLjz8a1sbHLHPn0pqFuzoytmtVruM85asphem5pmw3C9PKuI5mLDhenlW6ylCSxks2TyaJjJAbBNZWUrGQLeyM0fJyfOgIbidR8M0g4zw1ZWU8UK2Sm+uSY90pPKqMgcCnFsCJ+6LFgJI0ycdGXJrVZWkaIfHaxy3IiOQNzDI68UKsCOjsSchN3zyKyspUMzUduksqxsWAPiDz0zUTwKsTybmJEaNg4xk5/at1lYHs42gsVPTdt+WaglgjRiVUCsrKIGA3MjRuQMHHnXMUzP8AiA5rKyiKSEkdCeaIQZTJJJ9aysrBNhFPJH51lZWUQH//2Q=='}} style={styles.cardImg}/>
                <View style={styles.cardBody}>
                    <Text style = {styles.cardTitle} >Devara</Text>
                    <Text style = {styles.cardDes}>This is a new movie releasing on 27th September</Text>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    maincont:{
        flex:1,
        alignItems:'center',
    },
    headingText: {
        fontSize:24,
        fontWeight:'bold',
        paddingHorizontal:9

    },
    card:{
        margin:'auto',
        width:360,
        height:350,
        borderRadius:9,
        shadowOffset:{
            width:1,
            height:1
        }
    },
    elevated:{
        elevation:3,
        backgroundColor:'wheat'
    },
    cardImg:{
        height:180,
        margin:0,
        borderRadius:4
    },
    cardBody:{

    },
    cardTitle:{
        padding:3,
        fontSize:19,
        fontWeight:'bold'
    },
    cardDes:{
        padding:3
    }
})
