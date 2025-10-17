import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  SafeAreaView,
  StatusBar,
  Dimensions,
} from 'react-native';

export default function App() {
  const student = {
    name: 'MOURAD KANCHOUCH',
    program: 'Computer Engineering',
    year: '4ème Année',
    studentId: 'EMSI-2025064',
    imageUrl: 'https://randomuser.me/api/portraits/men/13.jpg',
  };

  const university = {
    name: 'EMSI',
    fullName: 'École Marocaine des Sciences de l\'Ingénieur',
    logo: 'https://cdn-icons-png.flaticon.com/512/2602/2602414.png',
  };

  const { width: screenW } = Dimensions.get('window');
  const cardWidth = Math.min(520, Math.round(screenW * 0.92));
  const cardHeight = Math.round(cardWidth * 0.58);

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#e8f5e9" />
      <View style={[styles.card, { width: cardWidth, height: cardHeight }]}>
        
        <View style={styles.header}>
          <Image 
            source={{ uri: university.logo }} 
            style={styles.logo} 
            resizeMode="contain" 
          />
          <View style={styles.headerText}>
            <Text style={styles.schoolName}>{university.name}</Text>
            <Text style={styles.schoolFullName}>{university.fullName}</Text>
          </View>
          <View style={styles.idBadge}>
            <Text style={styles.idBadgeText}>{student.studentId}</Text>
          </View>
        </View>

        <View style={styles.content}>
          
          <View style={styles.photoSection}>
            <Image 
              source={{ uri: student.imageUrl }} 
              style={styles.photo} 
              resizeMode="cover" 
            />
            <Text style={styles.photoLabel}>STUDENT</Text>
          </View>

          <View style={styles.infoSection}>
            
            <View style={styles.field}>
              <Text style={styles.label}>NAME</Text>
              <Text style={styles.value}>{student.name}</Text>
            </View>

            <View style={styles.rowFields}>
              <View style={[styles.field, styles.halfField]}>
                <Text style={styles.label}>PROGRAM</Text>
                <Text style={styles.value}>{student.program}</Text>
              </View>

              <View style={[styles.field, styles.halfField]}>
                <Text style={styles.label}>YEAR</Text>
                <Text style={styles.value}>{student.year}</Text>
              </View>
            </View>

            <View style={styles.rowFields}>
              <View style={[styles.field, styles.halfField]}>
                <Text style={styles.label}>DATE OF BIRTH</Text>
                <Text style={styles.value}>{student.dateOfBirth}</Text>
              </View>

              <View style={[styles.field, styles.halfField]}>
                <Text style={styles.label}>STUDENT ID</Text>
                <Text style={styles.value}>{student.studentId}</Text>
              </View>
            </View>

            

          </View>
        </View>

        <View style={styles.footer}>
          <Text style={styles.footerText}>OFFICIAL STUDENT IDENTIFICATION CARD</Text>
        </View>
        
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e8f5e9',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  card: {
    backgroundColor: '#ffffff',
    borderRadius: 12,
    overflow: 'hidden',
    borderWidth: 2,
    borderColor: '#2e7d32',
    shadowColor: '#1b5e20',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 10,
  },
  header: {
    backgroundColor: '#2e7d32',
    flexDirection: 'row',
    paddingVertical: 12,
    paddingHorizontal: 16,
    alignItems: 'center',
  },
  logo: {
    width: 45,
    height: 45,
    tintColor: '#ffffff',
    marginRight: 12,
  },
  headerText: {
    flex: 1,
  },
  schoolName: {
    color: '#ffffff',
    fontSize: 24,
    fontWeight: '900',
    letterSpacing: 2,
  },
  schoolFullName: {
    color: '#c8e6c9',
    fontSize: 10,
    marginTop: 2,
  },
  idBadge: {
    backgroundColor: '#ffffff',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 6,
  },
  idBadgeText: {
    color: '#2e7d32',
    fontSize: 12,
    fontWeight: '800',
  },
  content: {
    flex: 1,
    flexDirection: 'row',
    padding: 16,
  },
  photoSection: {
    alignItems: 'center',
    marginRight: 16,
  },
  photo: {
    width: 110,
    height: 90,
    borderRadius: 8,
    borderWidth: 3,
    borderColor: '#2e7d32',
  },
  photoLabel: {
    backgroundColor: '#2e7d32',
    color: '#ffffff',
    fontSize: 10,
    fontWeight: '700',
    paddingVertical: 4,
    paddingHorizontal: 12,
    marginTop: 8,
    borderRadius: 4,
  },
  infoSection: {
    flex: 1,
  },
  field: {
    marginBottom: 10,
    paddingBottom: 6,
    borderBottomWidth: 1,
    borderBottomColor: '#e0e0e0',
  },
  label: {
    fontSize: 9,
    color: '#2e7d32',
    fontWeight: '700',
    marginBottom: 3,
  },
  value: {
    fontSize: 13,
    color: '#212121',
    fontWeight: '600',
  },
  rowFields: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  halfField: {
    flex: 0.48,
  },
  datesRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 8,
  },
  dateBox: {
    flex: 0.48,
    backgroundColor: '#f1f8e9',
    padding: 10,
    borderRadius: 6,
    borderWidth: 1,
    borderColor: '#2e7d32',
    alignItems: 'center',
  },
  dateLabel: {
    fontSize: 9,
    color: '#2e7d32',
    fontWeight: '700',
  },
  dateValue: {
    fontSize: 11,
    color: '#1b5e20',
    fontWeight: '700',
    marginTop: 3,
  },
  footerText: {
    color: '#ffffff',
    fontSize: 9,
    fontWeight: '700',
    letterSpacing: 1,
  },
});