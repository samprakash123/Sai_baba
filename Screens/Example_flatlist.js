import {
    Text,
    SafeAreaView,
    StyleSheet,
    FlatList,
    View,
    Image,
    TouchableOpacity,
  } from 'react-native';
  
  export default function Example_flatlist() {
    var country_list = [
      'Afghanistan',
      'Albania',
      'Algeria',
      'Andorra',
      'Angola',
      'Anguilla',
      'Antigua &amp; Barbuda',
      'Argentina',
      'Armenia',
      'Aruba',
      'Australia',
      'Austria',
      'Azerbaijan',
      'Bahamas',
      'Bahrain',
      'Bangladesh',
      'Barbados',
      'Belarus',
      'Belgium',
      'Belize',
      'Benin',
      'Bermuda',
      'Bhutan',
      'Bolivia',
      'Bosnia &amp; Herzegovina',
      'Botswana',
      'Brazil',
      'British Virgin Islands',
      'Brunei',
      'Bulgaria',
      'Burkina Faso',
      'Burundi',
      'Cambodia',
      'Cameroon',
      'Cape Verde',
      'Cayman Islands',
      'Chad',
      'Chile',
      'China',
      'Colombia',
      'Congo',
      'Cook Islands',
      'Costa Rica',
      'Cote D Ivoire',
      'Croatia',
      'Cruise Ship',
      'Cuba',
      'Cyprus',
      'Czech Republic',
      'Denmark',
      'Djibouti',
      'Dominica',
      'Dominican Republic',
      'Ecuador',
      'Egypt',
      'El Salvador',
      'Equatorial Guinea',
      'Estonia',
      'Ethiopia',
      'Falkland Islands',
      'Faroe Islands',
      'Fiji',
      'Finland',
      'France',
      'French Polynesia',
      'French West Indies',
      'Gabon',
      'Gambia',
      'Georgia',
      'Germany',
      'Ghana',
      'Gibraltar',
      'Greece',
      'Greenland',
      'Grenada',
      'Guam',
      'Guatemala',
      'Guernsey',
      'Guinea',
      'Guinea Bissau',
      'Guyana',
      'Haiti',
      'Honduras',
      'Hong Kong',
      'Hungary',
      'Iceland',
      'India',
      'Indonesia',
      'Iran',
      'Iraq',
      'Ireland',
      'Isle of Man',
      'Israel',
      'Italy',
      'Jamaica',
      'Japan',
      'Jersey',
      'Jordan',
      'Kazakhstan',
      'Kenya',
      'Kuwait',
      'Kyrgyz Republic',
      'Laos',
      'Latvia',
      'Lebanon',
      'Lesotho',
      'Liberia',
      'Libya',
      'Liechtenstein',
      'Lithuania',
      'Luxembourg',
      'Macau',
      'Macedonia',
      'Madagascar',
      'Malawi',
      'Malaysia',
      'Maldives',
      'Mali',
      'Malta',
      'Mauritania',
      'Mauritius',
      'Mexico',
      'Moldova',
      'Monaco',
      'Mongolia',
      'Montenegro',
      'Montserrat',
      'Morocco',
      'Mozambique',
      'Namibia',
      'Nepal',
      'Netherlands',
      'Netherlands Antilles',
      'New Caledonia',
      'New Zealand',
      'Nicaragua',
      'Niger',
      'Nigeria',
      'Norway',
      'Oman',
      'Pakistan',
      'Palestine',
      'Panama',
      'Papua New Guinea',
      'Paraguay',
      'Peru',
      'Philippines',
      'Poland',
      'Portugal',
      'Puerto Rico',
      'Qatar',
      'Reunion',
      'Romania',
      'Russia',
      'Rwanda',
      'Saint Pierre &amp; Miquelon',
      'Samoa',
      'San Marino',
      'Satellite',
      'Saudi Arabia',
      'Senegal',
      'Serbia',
      'Seychelles',
      'Sierra Leone',
      'Singapore',
      'Slovakia',
      'Slovenia',
      'South Africa',
      'South Korea',
      'Spain',
      'Sri Lanka',
      'St Kitts &amp; Nevis',
      'St Lucia',
      'St Vincent',
      'St. Lucia',
      'Sudan',
      'Suriname',
      'Swaziland',
      'Sweden',
      'Switzerland',
      'Syria',
      'Taiwan',
      'Tajikistan',
      'Tanzania',
      'Thailand',
      "Timor L'Este",
      'Togo',
      'Tonga',
      'Trinidad &amp; Tobago',
      'Tunisia',
      'Turkey',
      'Turkmenistan',
      'Turks &amp; Caicos',
      'Uganda',
      'Ukraine',
      'United Arab Emirates',
      'United Kingdom',
      'Uruguay',
      'Uzbekistan',
      'Venezuela',
      'Vietnam',
      'Virgin Islands (US)',
      'Yemen',
      'Zambia',
      'Zimbabwe',
    ];
  
    var arrayOfNames = [
      'Manikanta',
      'Prakash',
      'Sai baba',
      'Biswa',
      'Rushmitha',
      'Manikanta',
      'Prakash',
      'Sai baba',
      'Biswa',
      'Rushmitha',
      'Manikanta',
      'Prakash',
      'Sai baba',
      'Biswa',
      'Rushmitha',
      'Manikanta',
      'Prakash',
      'Sai baba',
      'Biswa',
      'Rushmitha',
      'Manikanta',
      'Prakash',
      'Sai baba',
      'Biswa',
      'Rushmitha',
      'Manikanta',
      'Prakash',
      'Sai baba',
      'Biswa',
      'Rushmitha',
      'Manikanta',
      'Prakash',
      'Sai baba',
      'Biswa',
      'Rushmitha',
      'Manikanta',
      'Prakash',
      'Sai baba',
      'Biswa',
      'Rushmitha',
      'Manikanta',
      'Prakash',
      'Sai baba',
      'Biswa',
      'Rushmitha',
      'L',
      'B',
      ' baba',
      'K',
      'K',
    ];
    var colorsArray = [
      '#ff7f50',
      '#ff7f50',
      '#87cefa',
      '#da70d6',
      '#da70d6',
      '#da70d6',
      '#32cd32',
      'red',
      'blue',
      'black',
      'orange',
    ];
  
    var imagesArray = [
      'https://cdn.britannica.com/25/222725-050-170F622A/Indian-cricketer-Mahendra-Singh-Dhoni-2011.jpg',
      'https://t3.gstatic.com/licensed-image?q=tbn:ANd9GcTc34CeBgKVT2ZBrP_CGF0NLOibIF58yVfCLpiTmgZ80b4bwKUDcqD32HVWjrVPGIY5',
      'https://m.media-amazon.com/images/M/MV5BYTkyNTA3NzgtZDY4NS00MTUxLTg2MTEtNzdkYWZhOTU4YWZmXkEyXkFqcGdeQXVyNDUzOTQ5MjY@._V1_.jpg',
      'https://t3.gstatic.com/licensed-image?q=tbn:ANd9GcRj97QGj9LzMPxB4a6QKpR0SFmPmdm7iJdtuivqSLVXcPw0hCPqHsmVdXYhxnd0t-kQ',
      'https://t0.gstatic.com/licensed-image?q=tbn:ANd9GcTZ24vqQQH84Qseccl0rtsFn2Uo_FtO-54Im8O33CcKINZKnUuwAGhTSY2iQX4K8hVB','https://t0.gstatic.com/licensed-image?q=tbn:ANd9GcTZ24vqQQH84Qseccl0rtsFn2Uo_FtO-54Im8O33CcKINZKnUuwAGhTSY2iQX4K8hVB','https://t0.gstatic.com/licensed-image?q=tbn:ANd9GcTZ24vqQQH84Qseccl0rtsFn2Uo_FtO-54Im8O33CcKINZKnUuwAGhTSY2iQX4K8hVB'
    ];
  
    const renderNames = ({ item }) => (
      <TouchableOpacity
        style={{
          height: 40,
          marginLeft: 20,
          margin: 5,
          borderColor: 'black',
          borderWidth: 1,
          flexDirection: 'row',
          alignItems: 'center',
        }}
        onPress={() => {
          alert(item);
        }}>
        <Image
          style={{
            height: 30,
            width: 30,
            backgroundColor: 'red',
            margin: 5,
            borderRadius: 15,
          }}
          source={{
            uri: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?cs=srgb&dl=pexels-pixabay-220453.jpg&fm=jpg',
          }}></Image>
        <Text style={{ marginLeft: 10 }}>{item}</Text>
      </TouchableOpacity>
    );
  
    const renderGallery = ({ item }) => (
      <View
        style={{
          height: 400,
          borderColor: 'black',
          borderWidth: 1,
          flexDirection: 'row',
          alignItems: 'center',
        }}>
        <Image
          style={{
            height: '100%',
            width: '100%',
          }}
          resizeMode={'cover'}
          source={{
            uri: item,
          }}></Image>
      </View>
    );
  
    const renderInstaPost = ({ item }) => (
      <View
        style={{
          borderColor: 'black',
          borderWidth: 1,
          alignItems: 'center',
        }}>
        <View
          style={{
            height: 50,
            width: '100%',
          }}>
          <View
            style={{
              height: 40,
              marginLeft: 20,
              marginTop: 20,
              margin: 5,
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}>
            <Image
              style={{
                height: 30,
                width: 30,
                margin: 5,
                borderRadius: 15,
                borderColor: 'red',
                borderWidth: 2,
              }}
              source={{
                uri: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?cs=srgb&dl=pexels-pixabay-220453.jpg&fm=jpg',
              }}></Image>
            <Text style={{ marginLeft: 10 }}>westly.windler</Text>
  
            <TouchableOpacity>
              <Text style={{ marginLeft: 10, fontSize: 20 }}>...</Text>
            </TouchableOpacity>
          </View>
        </View>
  
        <Image
          style={{
            width: '100%',
            height: 200,
          }}
          resizeMode={'cover'}
          source={{
            uri: item,
          }}></Image>
      </View>
    );
  
    const renderCountry = ({ item }) => (
      <TouchableOpacity
        style={{
          height: 40,
          marginLeft: 20,
          margin: 5,
          borderColor: 'black',
          borderWidth: 1,
          flexDirection: 'row',
          alignItems: 'center',
        }}
        onPress={() => {
          alert(item);
        }}>
        <Text style={{ marginLeft: 10 }}>{item}</Text>
      </TouchableOpacity>
    );
  
    const renderColor = ({ item }) => (
      <TouchableOpacity
        style={{
          height: 40,
          marginLeft: 20,
          margin: 5,
          borderColor: 'black',
          borderWidth: 1,
          flexDirection: 'row',
          alignItems: 'center',
          backgroundColor: item,
        }}
        onPress={() => {
          alert(item);
        }}></TouchableOpacity>
    );
  
    return (
      <SafeAreaView style={styles.container}>
        <Text style={{ fontSize: 30 }}>Instagram Example</Text>
        <FlatList data={imagesArray} renderItem={renderInstaPost} />
        <Text style={{ fontSize: 30 }}>Gallery Example</Text>
        <FlatList data={imagesArray} renderItem={renderGallery} />
        <Text style={{ fontSize: 30 }}>Contacts Example</Text>
        <FlatList data={arrayOfNames} renderItem={renderNames} />
        <Text style={{ fontSize: 30 }}>Country List Example</Text>
        <FlatList data={country_list} renderItem={renderCountry} />
        <Text style={{ fontSize: 30 }}>Colors List Example</Text>
        <FlatList data={colorsArray} renderItem={renderColor} />
      </SafeAreaView>
    );
  }
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      backgroundColor: '#ecf0f1',
      padding: 8,
    },
  });
  