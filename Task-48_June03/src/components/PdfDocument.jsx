import React from 'react';
import { Document, Page, Text, View, StyleSheet, PDFViewer, Image } from '@react-pdf/renderer';

// Create styles
const styles = StyleSheet.create({
  page: {
    flexDirection: 'column',
    padding: 20,
    fontSize: 14,
    backgroundColor: '#f8f9fa',
  },
  header: {
    marginBottom: 20,
    textAlign: 'center',
  },
  section: {
    margin: 10,
    padding: 10,
    borderBottom: '1px solid #dee2e6',
  },
  image: {
    width: '100px',
    height: '100px',
    marginBottom: '10px',
    borderRadius: '50%',
    alignSelf: 'center',
  },
  label: {
    fontSize: 12,
    color: '#6c757d',
  },
  value: {
    fontSize: 16,
    marginBottom: 5,
    color: '#495057',
  },
  text: {
    marginBottom: 5,
  },
});

function PdfDocument(props) {
  return (
    <PDFViewer width="100%" height="800px">
      <Document>
        <Page size="A4" style={styles.page}>
          <View style={styles.header}>
            <Text style={styles.value}>Resume</Text>
          </View>
          <View style={styles.section}>
            {props.formData.profilePhoto && (
              <Image src={URL.createObjectURL(props.formData.profilePhoto)} style={styles.image} />
            )}
          </View>
          <View style={styles.section}>
            <Text style={styles.label}>Full Name:</Text>
            <Text style={styles.value}>{props.formData.fullName}</Text>
          </View>
          <View style={styles.section}>
            <Text style={styles.label}>Job Title:</Text>
            <Text style={styles.value}>{props.formData.jobTitle}</Text>
          </View>
          <View style={styles.section}>
            <Text style={styles.label}>Email:</Text>
            <Text style={styles.value}>{props.formData.email}</Text>
          </View>
          <View style={styles.section}>
            <Text style={styles.label}>Phone:</Text>
            <Text style={styles.value}>{props.formData.phone}</Text>
          </View>
          <View style={styles.section}>
            <Text style={styles.label}>Address:</Text>
            <Text style={styles.value}>{props.formData.address}</Text>
          </View>
          <View style={styles.section}>
            <Text style={styles.label}>Education:</Text>
            <Text style={styles.value}>{props.formData.education}</Text>
          </View>
          <View style={styles.section}>
            <Text style={styles.label}>Experience:</Text>
            <Text style={styles.value}>{props.formData.experience}</Text>
          </View>
          <View style={styles.section}>
            <Text style={styles.label}>Skills:</Text>
            <Text style={styles.value}>{props.formData.skills}</Text>
          </View>
        </Page>
      </Document>
    </PDFViewer>
  );
}

export default PdfDocument;
