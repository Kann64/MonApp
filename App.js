import React from 'react';
import { 
  StyleSheet, 
  Text, 
  View, 
  Image, 
  SafeAreaView, 
  StatusBar 
} from 'react-native';

export default function App() {
  // Sample student data
  const student = {
    name: 'John Smith',
    id: '2025064',
    program: 'Computer Science',
    year: '3rd Year',
    validUntil: '2026-07-31',
    imageUrl: 'https://randomuser.me/api/portraits/men/13.jpg',
    barcode: '************2025064************',
    issueDate: '2023-09-01',
  };

  // Current date information
  const currentDate = '2025-10-16';

  // University logo - replace with your actual logo URL
  const universityLogo = 'https://cdn-icons-png.flaticon.com/512/2602/2602414.png';

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" />
      
      <View style={styles.card}>
        {/* Header with logo and university name */}
        <View style={styles.header}>
          <Image 
            source={{ uri: universityLogo }}
            style={styles.logo}
            resizeMode="contain"
          />
          <View style={styles.headerTextContainer}>
            <Text style={styles.universityName}>UNIVERSITY OF TECHNOLOGY</Text>
            <Text style={styles.cardType}>STUDENT IDENTIFICATION</Text>
          </View>
        </View>
        
        <View style={styles.cardContent}>
          {/* Photo ID Section */}
          <View style={styles.photoSection}>
            <Image 
              source={{ uri: student.imageUrl }} 
              style={styles.photo} 
              resizeMode="cover"
            />
            <View style={styles.idNumberContainer}>
              <Text style={styles.idNumber}>{student.id}</Text>
            </View>
          </View>
          
          {/* Student Information */}
          <View style={styles.infoSection}>
            <View style={styles.infoRow}>
              <Text style={styles.infoLabel}>NAME</Text>
              <Text style={styles.infoValue}>{student.name}</Text>
            </View>
            
            <View style={styles.infoRow}>
              <Text style={styles.infoLabel}>PROGRAM</Text>
              <Text style={styles.infoValue}>{student.program}</Text>
            </View>
            
            <View style={styles.infoRow}>
              <Text style={styles.infoLabel}>YEAR</Text>
              <Text style={styles.infoValue}>{student.year}</Text>
            </View>
            
            {/* Dates Section */}
            <View style={styles.datesContainer}>
              <View style={styles.dateItem}>
                <Text style={styles.dateLabel}>ISSUED</Text>
                <Text style={styles.dateValue}>{student.issueDate}</Text>
              </View>
              
              <View style={styles.dateItem}>
                <Text style={styles.dateLabel}>EXPIRES</Text>
                <Text style={styles.dateValue}>{student.validUntil}</Text>
              </View>
            </View>
          </View>
          
          {/* Barcode Section */}
          <View style={styles.barcodeSection}>
            <Text style={styles.barcode}>{student.barcode}</Text>
            <Text style={styles.scanText}>SCAN FOR VERIFICATION</Text>
          </View>
        </View>
        
        {/* Footer */}
        <View style={styles.footer}>
          <Text style={styles.footerText}>
            This card remains the property of the University of Technology.
            If found, please return to the Student Affairs Office.
          </Text>
          <Text style={styles.dateText}>Valid as of: {currentDate}</Text>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e0e5ec',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 16,
  },
  card: {
    width: 300,
    height: 520,
    backgroundColor: '#fff',
    borderRadius: 16,
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 10,
  },
  header: {
    backgroundColor: '#003366',
    padding: 16,
    alignItems: 'center',
    flexDirection: 'row',
  },
  logo: {
    width: 40,
    height: 40,
    tintColor: '#fff',
    marginRight: 10,
  },
  headerTextContainer: {
    flex: 1,
  },
  universityName: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#fff',
    letterSpacing: 0.5,
  },
  cardType: {
    fontSize: 10,
    color: '#e0e0e0',
    marginTop: 2,
  },
  cardContent: {
    flex: 1,
    padding: 16,
  },
  photoSection: {
    alignItems: 'center',
    marginBottom: 20,
  },
  photo: {
    width: 120,
    height: 150,
    borderRadius: 8,
    borderWidth: 3,
    borderColor: '#003366',
  },
  idNumberContainer: {
    backgroundColor: '#003366',
    paddingVertical: 6,
    paddingHorizontal: 20,
    borderRadius: 4,
    marginTop: 10,
  },
  idNumber: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
    textAlign: 'center',
  },
  infoSection: {
    marginBottom: 16,
  },
  infoRow: {
    marginBottom: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#f0f0f0',
    paddingBottom: 8,
  },
  infoLabel: {
    fontSize: 10,
    color: '#666',
    fontWeight: '600',
    marginBottom: 2,
  },
  infoValue: {
    fontSize: 16,
    color: '#333',
    fontWeight: '500',
  },
  datesContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#f9f9f9',
    padding: 12,
    borderRadius: 8,
    marginTop: 8,
  },
  dateItem: {
    alignItems: 'center',
  },
  dateLabel: {
    fontSize: 9,
    color: '#666',
    fontWeight: '600',
  },
  dateValue: {
    fontSize: 11,
    fontWeight: '500',
    color: '#333',
  },
  barcodeSection: {
    alignItems: 'center',
    paddingVertical: 16,
    marginTop: 5,
    borderTopWidth: 1,
    borderTopColor: '#ddd',
    backgroundColor: '#f5f5f5',
  },
  barcode: {
    fontFamily: 'monospace',
    letterSpacing: 2,
    fontSize: 12,
  },
  scanText: {
    fontSize: 9,
    color: '#666',
    marginTop: 6,
    letterSpacing: 1,
  },
  footer: {
    backgroundColor: '#003366',
    padding: 12,
    alignItems: 'center',
  },
  footerText: {
    fontSize: 9,
    color: '#fff',
    textAlign: 'center',
    lineHeight: 14,
  },
  dateText: {
    fontSize: 8,
    color: '#e0e0e0',
    marginTop: 6,
  },
});