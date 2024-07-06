// MyDocument.js
import React from 'react';
import { Document, Page, Text, View, StyleSheet } from '@react-pdf/renderer';

// Create styles
const styles = StyleSheet.create({
  page: {
    flexDirection: 'row',
    backgroundColor: '#ffffff',
    padding: 20,
  },
  section: {
    margin: 10,
    padding: 10,
    flexGrow: 1,
  },
  heading: {
    fontSize: 24,
    marginBottom: 10,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  subjectRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 5,
  },
  subjectName: {
    width: '70%',
  },
  marks: {
    width: '30%',
    textAlign: 'right',
  },
});

const MyDocument = ({ student_email, marks }) => (
  <Document>
    <Page size="A4" style={styles.page}>
      <View style={styles.section}>
        <Text style={styles.heading}>Student Marks Report</Text>
        <Text>Student email ID: {student_email}</Text>
        <View style={styles.subjectRow}>
          <Text style={styles.subjectName}>Computer Organization and Architecture:</Text>
          <Text style={styles.marks}>{marks.subject1_marks}</Text>
        </View>
        <View style={styles.subjectRow}>
          <Text style={styles.subjectName}>Software Engineering:</Text>
          <Text style={styles.marks}>{marks.subject2_marks}</Text>
        </View>
        <View style={styles.subjectRow}>
          <Text style={styles.subjectName}>Communication Engineering:</Text>
          <Text style={styles.marks}>{marks.subject3_marks}</Text>
        </View>
        <View style={styles.subjectRow}>
          <Text style={styles.subjectName}>Web Technologies:</Text>
          <Text style={styles.marks}>{marks.subject4_marks}</Text>
        </View>
        <View style={styles.subjectRow}>
          <Text style={styles.subjectName}>Software Testing and Quality Assurance:</Text>
          <Text style={styles.marks}>{marks.subject5_marks}</Text>
        </View>
      </View>
    </Page>
  </Document>
);

export default MyDocument;
