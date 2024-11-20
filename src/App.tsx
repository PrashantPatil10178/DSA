"use client";

import { useState, useCallback } from "react";
import { CheckCircle, Clipboard, Code2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const codeExamples = [
  {
    title:
      " Design a hash table to manage a product catalog. Each product has a unique product ID, name, and price. Use linear probing for collision resolu on. Implement opera ons to add, search, update, and delete a product. ",
    description: "unit 3.1",
    code: `#include <iostream>
#include <string>
using namespace std;

const int TABLE_SIZE = 100;

struct Product {
    int productID;
    string name;
    double price;
    bool isDeleted;

    Product() : productID(-1), name(""), price(0.0), isDeleted(false) {}
    Product(int id, string name, double price) : productID(id), name(name), price(price), isDeleted(false) {}
};

class HashTable {
private:
    Product table[TABLE_SIZE];

    int hashFunction(int key) {
        return key % TABLE_SIZE;
    }

public:
    void addProduct(int productID, string name, double price) {
        int index = hashFunction(productID);
        int originalIndex = index;
        bool placed = false;

        while (!placed) {
            if (table[index].productID == -1 || table[index].isDeleted) {
                table[index] = Product(productID, name, price);
                placed = true;
            } else {
                index = (index + 1) % TABLE_SIZE;
                if (index == originalIndex) {
                    cout << "Hash table is full!" << endl;
                    return;
                }
            }
        }
    }

    Product* searchProduct(int productID) {
        int index = hashFunction(productID);
        int originalIndex = index;

        while (table[index].productID != -1) {
            if (table[index].productID == productID && !table[index].isDeleted) {
                return &table[index];
            }
            index = (index + 1) % TABLE_SIZE;
            if (index == originalIndex) break;
        }
        return nullptr;
    }

    void updateProduct(int productID, string name, double price) {
        Product* product = searchProduct(productID);
        if (product) {
            product->name = name;
            product->price = price;
            cout << "Product updated successfully." << endl;
        } else {
            cout << "Product not found." << endl;
        }
    }

    void deleteProduct(int productID) {
        Product* product = searchProduct(productID);
        if (product) {
            product->isDeleted = true;
            cout << "Product deleted successfully." << endl;
        } else {
            cout << "Product not found." << endl;
        }
    }

    void displayTable() {
        for (int i = 0; i < TABLE_SIZE; ++i) {
            if (table[i].productID != -1 && !table[i].isDeleted) {
                cout << "Index " << i << ": "
                     << "ProductID: " << table[i].productID << ", "
                     << "Name: " << table[i].name << ", "
                     << "Price: " << table[i].price << endl;
            }
        }
    }
};

int main() {
    HashTable catalog;

    catalog.addProduct(101, "Laptop", 1500.0);
    catalog.addProduct(102, "Smartphone", 800.0);
    catalog.addProduct(103, "Headphones", 150.0);

    catalog.displayTable();

    Product* found = catalog.searchProduct(102);
    if (found) {
        cout << "Product found: " << found->name << " - $" << found->price << endl;
    }

    catalog.updateProduct(103, "Wireless Headphones", 200.0);
    catalog.deleteProduct(101);

    cout << "\nAfter Updates:" << endl;
    catalog.displayTable();

    return 0;
}`,
  },
  {
    title:
      "Create a hash table to manage employee records. Each record should include an employee ID, name, and department. Use chaining with linked lists for collision handling. Support adding, searching, and dele ng employee records ",
    description: "unit 3.2",
    code: `#include <iostream>
#include <string>
#include <list>
using namespace std;

struct Employee {
    int employeeID;
    string name;
    string department;

    Employee(int id, string name, string department) : employeeID(id), name(name), department(department) {}
};

const int TABLE_SIZE = 10;

class HashTable {
private:
    list<Employee> table[TABLE_SIZE];

    int hashFunction(int key) {
        return key % TABLE_SIZE;
    }

public:
    void addEmployee(int employeeID, string name, string department) {
        int index = hashFunction(employeeID);
        table[index].emplace_back(employeeID, name, department);
        cout << "Employee added successfully." << endl;
    }

    Employee* searchEmployee(int employeeID) {
        int index = hashFunction(employeeID);
        for (auto& emp : table[index]) {
            if (emp.employeeID == employeeID) {
                return &emp;
            }
        }
        return nullptr;
    }

    void deleteEmployee(int employeeID) {
        int index = hashFunction(employeeID);
        for (auto it = table[index].begin(); it != table[index].end(); ++it) {
            if (it->employeeID == employeeID) {
                table[index].erase(it);
                cout << "Employee deleted successfully." << endl;
                return;
            }
        }
        cout << "Employee not found." << endl;
    }

    void displayTable() {
        for (int i = 0; i < TABLE_SIZE; ++i) {
            cout << "Index " << i << ": ";
            for (const auto& emp : table[i]) {
                cout << "[ID: " << emp.employeeID << ", Name: " << emp.name << ", Dept: " << emp.department << "] -> ";
            }
            cout << "nullptr" << endl;
        }
    }
};

int main() {
    HashTable employees;

    employees.addEmployee(101, "Alice", "HR");
    employees.addEmployee(102, "Bob", "Engineering");
    employees.addEmployee(203, "Charlie", "Finance");

    employees.displayTable();

    Employee* found = employees.searchEmployee(102);
    if (found) {
        cout << "Employee found: " << found->name << ", Department: " << found->department << endl;
    }

    employees.deleteEmployee(101);

    cout << "\nAfter Deletion:" << endl;
    employees.displayTable();

    return 0;
}`,
  },
  {
    title:
      " Develop a hash table that stores students’ roll numbers as keys and their grades as values. Use quadra c probing for collision resolu on. Implement insert, search, and delete func ons to manage grades efficiently ",
    description: "unit 3.3",
    code: `#include <iostream>
using namespace std;

const int TABLE_SIZE = 100;

struct Student {
    int rollNumber;
    char grade;
    bool isDeleted;

    Student() : rollNumber(-1), grade(' '), isDeleted(false) {}
    Student(int roll, char g) : rollNumber(roll), grade(g), isDeleted(false) {}
};

class HashTable {
private:
    Student table[TABLE_SIZE];

    int hashFunction(int key) {
        return key % TABLE_SIZE;
    }

public:
    void insert(int rollNumber, char grade) {
        int index = hashFunction(rollNumber);
        int i = 0;

        while (table[(index + i * i) % TABLE_SIZE].rollNumber != -1 &&
               !table[(index + i * i) % TABLE_SIZE].isDeleted &&
               table[(index + i * i) % TABLE_SIZE].rollNumber != rollNumber) {
            i++;
            if (i >= TABLE_SIZE) {
                cout << "Hash table is full!" << endl;
                return;
            }
        }

        int finalIndex = (index + i * i) % TABLE_SIZE;
        table[finalIndex] = Student(rollNumber, grade);
        cout << "Student grade added successfully." << endl;
    }

    char search(int rollNumber) {
        int index = hashFunction(rollNumber);
        int i = 0;

        while (table[(index + i * i) % TABLE_SIZE].rollNumber != -1) {
            int finalIndex = (index + i * i) % TABLE_SIZE;
            if (table[finalIndex].rollNumber == rollNumber && !table[finalIndex].isDeleted) {
                return table[finalIndex].grade;
            }
            i++;
            if (i >= TABLE_SIZE) break;
        }
        return ' ';
    }

    void deleteStudent(int rollNumber) {
        int index = hashFunction(rollNumber);
        int i = 0;

        while (table[(index + i * i) % TABLE_SIZE].rollNumber != -1) {
            int finalIndex = (index + i * i) % TABLE_SIZE;
            if (table[finalIndex].rollNumber == rollNumber && !table[finalIndex].isDeleted) {
                table[finalIndex].isDeleted = true;
                cout << "Student grade deleted successfully." << endl;
                return;
            }
            i++;
            if (i >= TABLE_SIZE) break;
        }
        cout << "Student not found." << endl;
    }

    void displayTable() {
        for (int i = 0; i < TABLE_SIZE; ++i) {
            if (table[i].rollNumber != -1 && !table[i].isDeleted) {
                cout << "Index " << i << ": Roll Number: " << table[i].rollNumber 
                     << ", Grade: " << table[i].grade << endl;
            }
        }
    }
};

int main() {
    HashTable grades;

    grades.insert(101, 'A');
    grades.insert(102, 'B');
    grades.insert(203, 'C');

    grades.displayTable();

    char foundGrade = grades.search(102);
    if (foundGrade != ' ') {
        cout << "Grade for roll number 102: " << foundGrade << endl;
    } else {
        cout << "Student not found." << endl;
    }

    grades.deleteStudent(101);

    cout << "\nAfter Deletion:" << endl;
    grades.displayTable();

    return 0;
}`,
  },
  {
    title:
      "Implement a hash table to store integer values using a simple modulo-based hash func on. Define the size of the hash table as 10. Implement insert and search func ons, and demonstrate them by inser ng values into the table and searching for specific values. ",
    description: "unit 3.4",
    code: `#include <iostream>
#include <vector>
using namespace std;

const int TABLE_SIZE = 10;

class HashTable {
private:
    vector<int> table[TABLE_SIZE];  // Using separate chaining with vectors

    int hashFunction(int key) {
        return key % TABLE_SIZE;
    }

public:
    void insert(int value) {
        int index = hashFunction(value);
        table[index].push_back(value);
        cout << "Inserted value " << value << " at index " << index << "." << endl;
    }

    bool search(int value) {
        int index = hashFunction(value);
        for (int i = 0; i < table[index].size(); ++i) {
            if (table[index][i] == value) {
                cout << "Found value " << value << " at index " << index << "." << endl;
                return true;
            }
        }
        cout << "Value " << value << " not found in the table." << endl;
        return false;
    }

    void displayTable() {
        for (int i = 0; i < TABLE_SIZE; ++i) {
            cout << "Index " << i << ": ";
            for (int value : table[i]) {
                cout << value << " -> ";
            }
            cout << "nullptr" << endl;
        }
    }
};

int main() {
    HashTable ht;

    // Insert values
    ht.insert(5);
    ht.insert(15);
    ht.insert(25);
    ht.insert(35);

    // Display hash table
    cout << "\nHash Table contents:" << endl;
    ht.displayTable();

    // Search for specific values
    ht.search(15);
    ht.search(7);

    return 0;
}`,
  },
  {
    title:
      "Create a system to manage a parking lot. Each slot has a unique ID, and each vehicle has a registra on number. Use a hash table with linear probing to store vehicle informa on by slot ID and support func ons for adding, searching, and removing vehicles ",
    description: "unit 3.5",
    code: `#include <iostream>
#include <string>
using namespace std;

const int PARKING_SIZE = 20;

struct Vehicle {
    int slotID;
    string regNumber;
    bool isOccupied;

    Vehicle() : slotID(-1), regNumber(""), isOccupied(false) {}
    Vehicle(int id, string reg) : slotID(id), regNumber(reg), isOccupied(true) {}
};

class ParkingLot {
private:
    Vehicle parkingSlots[PARKING_SIZE];

    int hashFunction(int slotID) {
        return slotID % PARKING_SIZE;
    }

public:
    void addVehicle(int slotID, string regNumber) {
        int index = hashFunction(slotID);
        int originalIndex = index;
        int i = 0;

        while (parkingSlots[index].isOccupied && parkingSlots[index].slotID != slotID) {
            index = (originalIndex + i) % PARKING_SIZE;
            i++;
            if (i >= PARKING_SIZE) {
                cout << "Parking lot is full, cannot add vehicle." << endl;
                return;
            }
        }

        parkingSlots[index] = Vehicle(slotID, regNumber);
        cout << "Vehicle with registration number " << regNumber << " added to slot " << slotID << "." << endl;
    }

    Vehicle* searchVehicle(int slotID) {
        int index = hashFunction(slotID);
        int originalIndex = index;
        int i = 0;

        while (parkingSlots[index].isOccupied) {
            if (parkingSlots[index].slotID == slotID) {
                return &parkingSlots[index];
            }
            index = (originalIndex + i) % PARKING_SIZE;
            i++;
            if (i >= PARKING_SIZE) break;
        }
        return nullptr;
    }

    void removeVehicle(int slotID) {
        Vehicle* vehicle = searchVehicle(slotID);
        if (vehicle && vehicle->isOccupied) {
            vehicle->isOccupied = false;
            vehicle->slotID = -1;
            vehicle->regNumber = "";
            cout << "Vehicle removed from slot " << slotID << "." << endl;
        } else {
            cout << "Vehicle not found in slot " << slotID << "." << endl;
        }
    }

    void displayParkingLot() {
        for (int i = 0; i < PARKING_SIZE; ++i) {
            if (parkingSlots[i].isOccupied) {
                cout << "Slot " << i << ": Registration Number: " << parkingSlots[i].regNumber << endl;
            } else {
                cout << "Slot " << i << ": Empty" << endl;
            }
        }
    }
};

int main() {
    ParkingLot lot;

    // Add vehicles
    lot.addVehicle(1, "ABC123");
    lot.addVehicle(5, "XYZ987");
    lot.addVehicle(12, "LMN456");

    // Display parking lot
    cout << "\nParking Lot Status:" << endl;
    lot.displayParkingLot();

    // Search for a specific vehicle
    Vehicle* found = lot.searchVehicle(5);
    if (found) {
        cout << "Vehicle found in slot " << found->slotID << " with registration number: " << found->regNumber << endl;
    } else {
        cout << "Vehicle not found in slot 5." << endl;
    }

    // Remove a vehicle
    lot.removeVehicle(1);

    // Display parking lot after removal
    cout << "\nParking Lot Status after Removal:" << endl;
    lot.displayParkingLot();

    return 0;
}`,
  },
  {
    title:
      "Implement a system to track student a endance, with student roll numbers as keys and a counter for the number of classes a ended. Use chaining to handle collisions and provide functions for adding a endance, viewing total a endance, and reseting data.",
    description: "unit 3.6",
    code: `#include <iostream>
#include <list>
#include <string>
using namespace std;

const int TABLE_SIZE = 10;

struct Student {
    int rollNumber;
    int attendanceCount;

    Student(int roll) : rollNumber(roll), attendanceCount(0) {}
};

class AttendanceSystem {
private:
    list<Student> table[TABLE_SIZE];

    int hashFunction(int rollNumber) {
        return rollNumber % TABLE_SIZE;
    }

public:
    // Add attendance for a student
    void addAttendance(int rollNumber) {
        int index = hashFunction(rollNumber);

        // Search for the student in the chain
        for (auto& student : table[index]) {
            if (student.rollNumber == rollNumber) {
                student.attendanceCount++;
                cout << "Added attendance for student roll number " << rollNumber << "." << endl;
                return;
            }
        }

        // If student is not found, add a new entry
        table[index].emplace_back(rollNumber);
        table[index].back().attendanceCount++;
        cout << "Student roll number " << rollNumber << " added with attendance count initialized to 1." << endl;
    }

    // View total attendance for a student
    int viewAttendance(int rollNumber) {
        int index = hashFunction(rollNumber);

        // Search for the student in the chain
        for (const auto& student : table[index]) {
            if (student.rollNumber == rollNumber) {
                cout << "Total attendance for student roll number " << rollNumber << " is " << student.attendanceCount << " classes." << endl;
                return student.attendanceCount;
            }
        }

        cout << "Student roll number " << rollNumber << " not found." << endl;
        return -1;
    }

    // Reset all attendance data
    void resetAttendance() {
        for (int i = 0; i < TABLE_SIZE; ++i) {
            table[i].clear();
        }
        cout << "All attendance data has been reset." << endl;
    }

    // Display attendance data for all students
    void displayAllAttendance() {
        cout << "Attendance data:" << endl;
        for (int i = 0; i < TABLE_SIZE; ++i) {
            cout << "Index " << i << ": ";
            for (const auto& student : table[i]) {
                cout << "[Roll Number: " << student.rollNumber << ", Attendance: " << student.attendanceCount << "] -> ";
            }
            cout << "nullptr" << endl;
        }
    }
};

int main() {
    AttendanceSystem attendance;

    // Add attendance for students
    attendance.addAttendance(101);
    attendance.addAttendance(102);
    attendance.addAttendance(103);
    attendance.addAttendance(101);  // Increment attendance for roll number 101

    // Display all attendance
    cout << "\nDisplaying all attendance:" << endl;
    attendance.displayAllAttendance();

    // View total attendance for a specific student
    attendance.viewAttendance(101);
    attendance.viewAttendance(104);  // Test for a non-existent student

    // Reset attendance data
    attendance.resetAttendance();

    // Display all attendance after reset
    cout << "\nDisplaying all attendance after reset:" << endl;
    attendance.displayAllAttendance();

    return 0;
}`,
  },
  {
    title:
      "Write a program to implement chaining with linked lists as a collision resolution technique in a hash table. Store student records (Student ID and Name) and provide options to insert, delete, and search for a student record. ",
    description: "unit 3.7",
    code: `#include <iostream> 
#include <list> 
#include <string> 
using namespace std; 
 
const int TABLE_SIZE = 10; 
 
struct Student { 
    int studentID; 
    string name; 
 
    Student(int id, const string& studentName) : studentID(id), name(studentName) {} 
}; 
 
class HashTable { 
private: 
    list<Student> table[TABLE_SIZE]; 
 
    int hashFunction(int studentID) { 
        return studentID % TABLE_SIZE; 
    } 
 
public: 
    // Insert a student record 
    void insert(int studentID, const string& name) { 
        int index = hashFunction(studentID); 
 
        // Check if the student already exists, and if so, return without inser ng 
        for (const auto& student : table[index]) { 
            if (student.studentID == studentID) { 
                cout << "Student with ID " << studentID << " already exists." << endl; 
                return; 
            } 
        } 
 
        // Insert the new student 
        table[index].emplace_back(studentID, name); 
        cout << "Inserted student with ID " << studentID << " and Name " << name << "." << endl; 
    } 
 
    // Delete a student record 
    void remove(int studentID) { 
        int index = hashFunction(studentID); 
 
        for (auto it = table[index].begin(); it != table[index].end(); ++it) { 
            if (it->studentID == studentID) { 
                table[index].erase(it); 
                cout << "Deleted student with ID " << studentID << "." << endl; 
                return; 
            } 
        } 
 
        cout << "Student with ID " << studentID << " not found." << endl; 
    } 
 
    // Search for a student record 
    void search(int studentID) { 
        int index = hashFunction(studentID); 
         for (const auto& student : table[index]) { 
            if (student.studentID == studentID) { 
                cout << "Found student with ID " << studentID << " and Name " << student.name << "." << 
endl; 
                return; 
            } 
        } 
 
        cout << "Student with ID " << studentID << " not found." << endl; 
    } 
 
    // Display all student records 
    void displayTable() { 
        for (int i = 0; i < TABLE_SIZE; ++i) { 
            cout << "Index " << i << ": "; 
            for (const auto& student : table[i]) { 
                cout << "[ID: " << student.studentID << ", Name: " << student.name << "] -> "; 
            } 
            cout << "nullptr" << endl; 
        } 
    } 
}; 
 
int main() { 
    HashTable ht; 
 
    // Insert student records 
    ht.insert(101, "Alice"); 
    ht.insert(102, "Bob"); 
    ht.insert(112, "Charlie");  // Causes a collision with ID 102 
    ht.insert(203, "David"); 
 
    // Display hash table contents 
    cout << "\nHash Table contents:" << endl; 
    ht.displayTable(); 
 
    // Search for a student 
    ht.search(102); 
    ht.search(999);  // Test for a non-existent student 
 
    // Delete a student record 
    ht.remove(112); 
 
    // Display hash table contents a er dele on 
    cout << "\nHash Table a er dele on:" << endl; 
    ht.displayTable(); 
 
    return 0; 
}`,
  },
  {
    title:
      "Implement a divide-and-conquer algorithm to find the closest pair of points in a 2D plane. This is a classic problem that can be efficiently solved with divide and conquer by recursively finding the minimum distance in subarrays ",
    description: "unit 4.1",
    code: `#include <iostream> 
#include <vector> 
#include <cmath> 
#include <algorithm> 
#include <float.h> 
using namespace std; 
struct Point { 
int x, y; 
}; 
// Compare points based on x-coordinate 
bool compareX(const Point& p1, const Point& p2) { 
return p1.x < p2.x; 
} 
// Compare points based on y-coordinate 
bool compareY(const Point& p1, const Point& p2) { 
return p1.y < p2.y; 
} 
// Calculate Euclidean distance between two points 
double distance(const Point& p1, const Point& p2) { 
return sqrt((p1.x - p2.x) * (p1.x - p2.x) + (p1.y - p2.y) * (p1.y - p2.y)); 
} 
 
// Brute-force approach to find the smallest distance for small point sets 
double bruteForce(vector<Point>& points, int le , int right) { 
    double minDist = DBL_MAX; 
    for (int i = le ; i < right; ++i) { 
        for (int j = i + 1; j <= right; ++j) { 
            double dist = distance(points[i], points[j]); 
            if (dist < minDist) { 
                minDist = dist; 
            } 
        } 
    } 
    return minDist; 
} 
 
// Find the minimum distance in a strip of points 
double stripClosest(vector<Point>& strip, double d) { 
    double minDist = d; 
    sort(strip.begin(), strip.end(), compareY); 
 
    for (int i = 0; i < strip.size(); ++i) { 
        for (int j = i + 1; j < strip.size() && (strip[j].y - strip[i].y) < minDist; ++j) { 
            double dist = distance(strip[i], strip[j]); 
            if (dist < minDist) { 
                minDist = dist; 
            } 
        } 
    } 
    return minDist; 
} 
 
// Recursive divide-and-conquer func on to find the smallest distance 
double closestPairRec(vector<Point>& points, int le , int right) { 
    if (right - le <= 3) { 
        return bruteForce(points, le , right); 
    } 
 
    int mid = le + (right - le ) / 2; 
    Point midPoint = points[mid]; 
 
    double dl = closestPairRec(points, le , mid); 
    double dr = closestPairRec(points, mid + 1, right); 
 
    double d = min(dl, dr); 
 
    vector<Point> strip; 
    for (int i = le ; i <= right; ++i) { 
        if (abs(points[i].x - midPoint.x) < d) { 
            strip.push_back(points[i]); 
        } 
    } 
 
    return min(d, stripClosest(strip, d)); 
} 
 
// Main func on to find the closest pair of points 
double closestPair(vector<Point>& points) { 
    sort(points.begin(), points.end(), compareX); 
    return closestPairRec(points, 0, points.size() - 1); 
} 
 
int main() { 
    vector<Point> points = {{2, 3}, {12, 30}, {40, 50}, {5, 1}, {12, 10}, {3, 4}}; 
 
    double minDistance = closestPair(points); 
    cout << "The smallest distance between a pair of points is: " << minDistance << endl; 
 
    return 0; 
}`,
  },
  {
    title:
      "Use the QuickSort algorithm to sort an array of transac on records by transac on amount. Implement the algorithm recursively and allow the user to input transac on records. ",
    description: "unit 4.2",
    code: `#include <iostream> 
#include <vector> 
using namespace std; 
 
struct Transaction { 
    int id; 
    double amount; 
 
    Transaction(int id, double amount) : id(id), amount(amount) {} 
}; 
 
int partion(vector<Transaction>& transactions, int low, int high) { 
    double pivot = transactions[high].amount; 
    int i = low - 1; 
 
    for (int j = low; j < high; ++j) { 
        if (transactions[j].amount < pivot) { 
            ++i; 
            swap(transactions[i], transactions[j]); 
        } 
    } 
    swap(transactions[i + 1], transactions[high]); 
    return i + 1; 
} 
 
void quickSort(vector<Transaction>& transactions, int low, int high) { 
    if (low < high) { 
        int pi = partion(transactions, low, high); 
        quickSort(transactions, low, pi - 1); 
        quickSort(transactions, pi + 1, high); 
    } 
} 
 
void displayTransactions(const vector<Transaction>& transactions) { 
   cout << "Sorted Transactions by Amount:\n"; 
    for (const auto& t : transactions) { 
        cout << "ID: " << t.id << ", Amount: " << t.amount << endl; 
    } 
} 
 
int main() { 
    int n; 
    cout << "Enter the number of transati ons: "; 
    cin >> n; 
 
    vector<Transaction> transactions; 
    for (int i = 0; i < n; ++i) { 
        int id; 
        double amount; 
        cout << "Enter transaction ID and amount: "; 
        cin >> id >> amount; 
        transactions.emplace_back(id, amount); 
    } 
 
    quickSort(transactions, 0, n - 1); 
    displayTransactions(transactions); 
 
    return 0; 
    /*
    Enter the number of transactions: 5
Enter transaction ID and amount: 101 500.75
Enter transaction ID and amount: 102 250.50
Enter transaction ID and amount: 103 750.30
Enter transaction ID and amount: 104 100.00
Enter transaction ID and amount: 105 300.00

    */
}`,
  },
  {
    title:
      " Implement the Merge Sort technique to merge two pre-sorted arrays of customer orders into one sorted array. Display the combined sorted list of orders ",
    description: "unit 4.3",
    code: `#include <iostream> 
#include <vector> 
using namespace std; 
 
void mergeArrays(const vector<int>& arr1, const vector<int>& arr2, vector<int>& mergedArray) { 
    int i = 0, j = 0; 
    while (i < arr1.size() && j < arr2.size()) { 
        if (arr1[i] <= arr2[j]) { 
            mergedArray.push_back(arr1[i++]); 
        } else { 
            mergedArray.push_back(arr2[j++]); 
        } 
    } 
    while (i < arr1.size()) mergedArray.push_back(arr1[i++]); 
    while (j < arr2.size()) mergedArray.push_back(arr2[j++]); 
} 
 
void displayOrders(const vector<int>& orders) { 
    cout << "Merged Sorted Orders:\n"; 
    for (int order : orders) { 
        cout << order << " "; 
    } 
    cout << endl; 
} 
 
int main() { 
    vector<int> arr1 = {1, 5, 9, 12}; 
    vector<int> arr2 = {3, 6, 7, 10, 15}; 
 
    vector<int> mergedArray; 
    mergeArrays(arr1, arr2, mergedArray); 
    displayOrders(mergedArray); 
 
    return 0; 
}`,
  },
  {
    title:
      "Simulate a network rou ng algorithm using Dijkstra’s algorithm. The program should determine the shortest path from a source node to all other nodes in a given network.",
    description: "unit 4.4",
    code: `#include <iostream> 
#include <vector> 
#include <queue> 
#include <limits> 
using namespace std; 
 
const int INF = numeric_limits<int>::max(); 
 
void dijkstra(const vector<vector<pair<int, int>>>& graph, int source) { 
    int n = graph.size(); 
    vector<int> dist(n, INF); 
    dist[source] = 0; 
 
    priority_queue<pair<int, int>, vector<pair<int, int>>, greater<>> pq; 
    pq.emplace(0, source); 
 
    while (!pq.empty()) { 
        int d = pq.top().first; 
        int u = pq.top().second; 
        pq.pop(); 
 
        if (d > dist[u]) continue; 
 
        for (const auto& edge : graph[u]) { 
            int v = edge.first; 
            int weight = edge.second; 
            if (dist[u] + weight < dist[v]) { 
                dist[v] = dist[u] + weight; 
                pq.emplace(dist[v], v); 
            } 
        } 
    } 
 
    cout << "Shortest distances from source node " << source << ":\n"; 
    for (int i = 0; i < n; ++i) { 
        if (dist[i] == INF) 
            cout << "Node " << i << ": INF\n"; 
        else 
            cout << "Node " << i << ": " << dist[i] << endl; 
    } 
} 
 
int main() { 
    int n = 5; 
    vector<vector<pair<int, int>>> graph(n); 
     
    graph[0].push_back({1, 10}); 
    graph[0].push_back({2, 3}); 
    graph[1].push_back({3, 2}); 
    graph[2].push_back({1, 1}); 
    graph[2].push_back({3, 8}); 
    graph[3].push_back({4, 7}); 
    graph[4].push_back({0, 9}); 
 
    int source = 0; 
    dijkstra(graph, source); 
 
    return 0; 
}`,
  },
  {
    title:
      "Develop a program that finds the minimum spanning tree of a graph represen ng a telecommunica ons network using Prim's algorithm. The user should be able to view the total minimized connec on cost.",
    description: "unit 4.5",
    code: `#include <iostream> 
#include <vector> 
#include <queue> 
using namespace std; 
 
struct Edge { 
    int to, weight; 
}; 
 
int primMST(const vector<vector<Edge>>& graph) { 
    int n = graph.size(); 
    vector<bool> inMST(n, false); 
    priority_queue<pair<int, int>, vector<pair<int, int>>, greater<>> pq; 
    pq.emplace(0, 0); 
 
    int totalCost = 0; 
    while (!pq.empty()) { 
        int weight = pq.top().first; 
        int u = pq.top().second; 
        pq.pop(); 
 
        if (inMST[u]) continue; 
        inMST[u] = true; 
        totalCost += weight; 
 
        for (const Edge& edge : graph[u]) { 
            if (!inMST[edge.to]) { 
                pq.emplace(edge.weight, edge.to); 
            } 
        } 
    } 
    return totalCost; 
} 
 
int main() { 
    int n = 5; 
    vector<vector<Edge>> graph(n); 
 
    graph[0].push_back({1, 2}); 
    graph[0].push_back({3, 6}); 
    graph[1].push_back({0, 2}); 
    graph[1].push_back({2, 3}); 
    graph[1].push_back({3, 8}); 
    graph[1].push_back({4, 5}); 
    graph[2].push_back({1, 3}); 
    graph[2].push_back({4, 7}); 
    graph[3].push_back({0, 6}); 
    graph[3].push_back({1, 8}); 
    graph[4].push_back({1, 5}); 
    graph[4].push_back({2, 7}); 
 
    int totalCost = primMST(graph); 
    cout << "Total minimized connec on cost for the network: " << totalCost << endl; 
 
    return 0; 
}`,
  },
  {
    title:
      "A company wants to maximize its profit by selecting projects based on available resources. Use the Fractional Knapsack problem to select the projects that yield the highest return within the resource limit.",
    description: "unit 4.6",
    code: `#include <iostream>
#include <vector>
#include <algorithm>

using namespace std;

// Structure to represent a project
struct Project {
    int id;
    double profit;
    double resource;

    Project(int id, double profit, double resource) : id(id), profit(profit), resource(resource) {}
};

// Comparator function to sort projects by profit-to-resource ratio in descending order
bool compare(const Project& a, const Project& b) {
    return (a.profit / a.resource) > (b.profit / b.resource);
}

// Function to solve the Fractional Knapsack problem
double fractionalKnapsack(vector<Project>& projects, double maxResources) {
    // Sort projects based on profit-to-resource ratio
    sort(projects.begin(), projects.end(), compare);

    double totalProfit = 0.0;
    for (const auto& project : projects) {
        if (maxResources >= project.resource) {
            maxResources -= project.resource;
            totalProfit += project.profit;
        } else {
            totalProfit += project.profit * (maxResources / project.resource);
            break;
        }
    }
    return totalProfit;
}

int main() {
    int n;
    double maxResources;

    cout << "Enter the number of projects: ";
    cin >> n;

    vector<Project> projects;
    cout << "Enter the profit and resource required for each project:\n";
    for (int i = 0; i < n; ++i) {
        double profit, resource;
        cout << "Project " << i + 1 << ": ";
        cin >> profit >> resource;
        projects.emplace_back(i + 1, profit, resource);
    }

    cout << "Enter the maximum available resources: ";
    cin >> maxResources;

    double maxProfit = fractionalKnapsack(projects, maxResources);

    cout << "Maximum profit within resource limit: " << maxProfit << endl;

    return 0;
    /*
    Enter the number of projects: 3
    Enter the profit and resource required for each project:
    Project 1: 60 10
    Project 2: 100 20
    Project 3: 120 30
    Enter the maximum available resources: 50
    */
}`,
  },
  {
    title:
      "Implement a binary search algorithm to quickly find the posi on of a specific book in a sorted list of ISBN numbers.",
    description: "unit 4.7",
    code: `#include <iostream> 
#include <vector> 
using namespace std; 
 
int binarySearch(const vector<int>& isbns, int target) { 
    int le = 0, right = isbns.size() - 1; 
 
    while (le <= right) { 
        int mid = le + (right - le ) / 2; 
        if (isbns[mid] == target) { 
            return mid; 
        } else if (isbns[mid] < target) { 
            le = mid + 1; 
        } else { 
            right = mid - 1; 
        } 
    } 
    return -1; 
} 
 
int main() { 
    vector<int> isbns = {12345, 23456, 34567, 45678, 56789}; 
    int targetISBN = 34567; 
 
    int pos = binarySearch(isbns, targetISBN); 
    if (pos != -1) { 
        cout << "ISBN " << targetISBN << " found at posi on: " << pos << endl; 
    } else { 
        cout << "ISBN " << targetISBN << " not found." << endl; 
    } 
 
    return 0; 
}`,
  },
  {
    title:
      "Design a program to find the minimum cost to connect all ci es in a region by construc ng roads using Kruskal's algorithm. Input should include city pairs and road construction costs.",
    description: "unit 4.8",
    code: `#include <iostream>
#include <vector>
#include <tuple>
#include <algorithm>

using namespace std;

// Structure to represent a union-find data structure (disjoint set)
class UnionFind {
private:
    vector<int> parent, rank;

public:
    UnionFind(int n) {
        parent.resize(n);
        rank.resize(n, 0);
        for (int i = 0; i < n; ++i) {
            parent[i] = i;
        }
    }

    // Find the representative of a set
    int find(int u) {
        if (u != parent[u]) {
            parent[u] = find(parent[u]); // Path compression
        }
        return parent[u];
    }

    // Union by rank
    bool unionSets(int u, int v) {
        int rootU = find(u);
        int rootV = find(v);

        if (rootU == rootV) return false; // They are already in the same set

        if (rank[rootU] > rank[rootV]) {
            parent[rootV] = rootU;
        } else if (rank[rootU] < rank[rootV]) {
            parent[rootU] = rootV;
        } else {
            parent[rootV] = rootU;
            rank[rootU]++;
        }
        return true;
    }
};

// Kruskal's algorithm to find MST
int kruskal(int n, vector<tuple<int, int, int>>& edges) {
    // Sort edges by weight
    sort(edges.begin(), edges.end(), [](const auto& a, const auto& b) {
        return get<2>(a) < get<2>(b);
    });

    UnionFind uf(n);
    int minCost = 0;

    cout << "Selected roads for the minimum spanning tree:\n";

    for (const auto& edge : edges) {
        int u, v, cost;
        tie(u, v, cost) = edge;

        if (uf.unionSets(u, v)) {
            minCost += cost;
            cout << "Road between city " << u << " and city " << v << " with cost " << cost << "\n";
        }
    }

    return minCost;
}

int main() {
    int n, m;

    cout << "Enter the number of cities: ";
    cin >> n;

    cout << "Enter the number of possible roads: ";
    cin >> m;

    vector<tuple<int, int, int>> edges;

    cout << "Enter the roads in the format (city1 city2 cost):\n";
    for (int i = 0; i < m; ++i) {
        int u, v, cost;
        cin >> u >> v >> cost;
        edges.emplace_back(u, v, cost);
    }

    int minCost = kruskal(n, edges);

    cout << "Minimum cost to connect all cities: " << minCost << endl;

    return 0;
    /*
    Enter the number of cities: 4
Enter the number of possible roads: 5
Enter the roads in the format (city1 city2 cost):
0 1 10
0 2 6
0 3 5
1 3 15
2 3 4
    */
}`,
  },
  {
    title:
      "Implement a greedy algorithm to schedule jobs within their deadlines to maximize profit. Each job has a profit and a deadline, and only one job can be performed at a time.",
    description: "unit 4.9",
    code: `#include <iostream> 
#include <vector> 
#include <algorithm> 
using namespace std; 
 
struct Job { 
    int id, deadline, profit; 
}; 
 
bool compare(const Job& a, const Job& b) { 
    return a.profit > b.profit; 
} 
 
int jobScheduling(vector<Job>& jobs) { 
    sort(jobs.begin(), jobs.end(), compare); 
 
    int maxDeadline = 0; 
    for (const auto& job : jobs) { 
        maxDeadline = max(maxDeadline, job.deadline); 
    } 
 
    vector<int> schedule(maxDeadline + 1, -1); 
    int maxProfit = 0; 
 
    for (const auto& job : jobs) { 
        for (int j = job.deadline; j > 0; --j) { 
            if (schedule[j] == -1) { 
                schedule[j] = job.id; 
                maxProfit += job.profit; 
                break; 
            } 
        } 
    } 
    return maxProfit; 
} 
 
int main() { 
    vector<Job> jobs = {{1, 2, 100}, {2, 1, 19}, {3, 2, 27}, {4, 1, 25}, {5, 3, 15}}; 
    int maxProfit = jobScheduling(jobs); 
    cout << "Maximum profit by scheduling jobs: " << maxProfit << endl; 
 
    return 0; 
}`,
  },
  {
    title:
      "Use the Floyd-Warshall algorithm to calculate the shortest path between all pairs of ci es in a network.",
    description: "unit 5.1",
    code: `#include <iostream> 
#include <vector> 
#include <climits> 
 
using namespace std; 
 
void floydWarshall(vector<vector<int>>& distances) { 
    int n = distances.size(); 
    vector<vector<int>> shortestPaths = distances; 
 
    // Floyd-Warshall algorithm 
    for (int k = 0; k < n; ++k) { 
        for (int i = 0; i < n; ++i) { 
            for (int j = 0; j < n; ++j) { 
                if (shortestPaths[i][k] != INT_MAX && shortestPaths[k][j] != INT_MAX  
                    && shortestPaths[i][j] > shortestPaths[i][k] + shortestPaths[k][j]) { 
                    shortestPaths[i][j] = shortestPaths[i][k] + shortestPaths[k][j]; 
                } 
            } 
        } 
    } 
 
    // Print the shortest path matrix 
    cout << "Shortest path distances between each pair of ci es:\n"; 
    for (int i = 0; i < n; ++i) { 
        for (int j = 0; j < n; ++j) { 
            if (shortestPaths[i][j] == INT_MAX) 
                cout << "INF "; 
            else 
                cout << shortestPaths[i][j] << " "; 
        } 
        cout << endl; 
    } 
} 
 
int main() { 
    // Example network of ci es with distances 
    vector<vector<int>> distances = { 
        {0, 5, INT_MAX, 10}, 
        {INT_MAX, 0, 3, INT_MAX}, 
        {INT_MAX, INT_MAX, 0, 1}, 
        {INT_MAX, INT_MAX, INT_MAX, 0} 
    }; 
 
    floydWarshall(distances); 
    return 0; 
}`,
  },
  {
    title:
      "Implement the Bellman-Ford algorithm to find the shortest path from a source warehouse to all other delivery locations in a logistics network, considering possible nega ve weights for certain routes.",
    description: "unit 5.2",
    code: `#include <iostream>
#include <vector>
#include <tuple>
#include <climits>

using namespace std;

// Function to implement Bellman-Ford algorithm
bool bellmanFord(int vertices, int edges, int source, 
                 const vector<tuple<int, int, int>>& edgeList,
                 vector<int>& distances, vector<int>& predecessors) {
    // Initialize distances and predecessors
    distances.assign(vertices, INT_MAX);
    predecessors.assign(vertices, -1);
    distances[source] = 0;

    // Relax edges |V| - 1 times
    for (int i = 0; i < vertices - 1; ++i) {
        for (const auto& edge : edgeList) {
            int u, v, weight;
            tie(u, v, weight) = edge;

            if (distances[u] != INT_MAX && distances[u] + weight < distances[v]) {
                distances[v] = distances[u] + weight;
                predecessors[v] = u;
            }
        }
    }

    // Check for negative-weight cycles
    for (const auto& edge : edgeList) {
        int u, v, weight;
        tie(u, v, weight) = edge;

        if (distances[u] != INT_MAX && distances[u] + weight < distances[v]) {
            cout << "Graph contains a negative-weight cycle.\n";
            return false;
        }
    }

    return true;
}

// Function to print the shortest paths
void printPaths(int source, const vector<int>& distances, const vector<int>& predecessors) {
    cout << "Shortest distances from source location " << source << ":\n";
    for (size_t i = 0; i < distances.size(); ++i) {
        cout << "To location " << i << ": ";
        if (distances[i] == INT_MAX) {
            cout << "No path\n";
        } else {
            cout << distances[i] << " (Path: ";
            int current = i;
            vector<int> path;

            while (current != -1) {
                path.push_back(current);
                current = predecessors[current];
            }

            for (auto it = path.rbegin(); it != path.rend(); ++it) {
                cout << *it << (next(it) == path.rend() ? ")" : " -> ");
            }
            cout << "\n";
        }
    }
}

int main() {
    int vertices, edges, source;

    // Input number of vertices and edges
    cout << "Enter the number of locations (vertices): ";
    cin >> vertices;
    cout << "Enter the number of routes (edges): ";
    cin >> edges;

    vector<tuple<int, int, int>> edgeList;

    // Input the edges (u, v, weight)
    cout << "Enter the routes in the format (source destination weight):\n";
    for (int i = 0; i < edges; ++i) {
        int u, v, weight;
        cin >> u >> v >> weight;
        edgeList.emplace_back(u, v, weight);
    }

    // Input the source vertex
    cout << "Enter the source location: ";
    cin >> source;

    vector<int> distances, predecessors;

    // Run Bellman-Ford algorithm
    if (bellmanFord(vertices, edges, source, edgeList, distances, predecessors)) {
        printPaths(source, distances, predecessors);
    }

    return 0;
    /*
    Enter the number of locations (vertices): 5
Enter the number of routes (edges): 8
Enter the routes in the format (source destination weight):
0 1 -1
0 2 4
1 2 3
1 3 2
1 4 2
3 2 5
3 1 1
4 3 -3
Enter the source location: 0
    */
}`,
  },
  {
    title:
      "Implement the Travelling Salesman Problem (TSP) using dynamic programming to opmize the delivery route for a company, minimizing travel distance and returning to the start location.",
    description: "unit 5.3",
    code: `#include <iostream> 
#include <vector> 
#include <climits> 
 
using namespace std; 
 
int tsp(int pos, int visited, const vector<vector<int>>& dist, vector<vector<int>>& dp) { 
    int n = dist.size(); 
 
    // If all ci es are visited, return cost to return to star ng city 
    if (visited == (1 << n) - 1) { 
        return dist[pos][0]; 
    } 
 
    // If result is already computed, return it 
    if (dp[pos][visited] != -1) { 
        return dp[pos][visited]; 
    } 
 
    int minCost = INT_MAX; 
 
    // Try visi ng all unvisited ci es and take the minimum cost 
    for (int city = 0; city < n; ++city) { 
        if ((visited & (1 << city)) == 0) { // Check if city is not visited 
            int newCost = dist[pos][city] + tsp(city, visited | (1 << city), dist, dp); 
            minCost = min(minCost, newCost); 
        } 
    } 
 
    // Store and return the result 
    return dp[pos][visited] = minCost; 
} 
 
int main() { 
    // Example distance matrix for 4 ci es 
    vector<vector<int>> dist = { 
        {0, 20, 42, 35}, 
        {20, 0, 30, 34}, 
        {42, 30, 0, 12}, 
        {35, 34, 12, 0} 
    };

    // for input matrix
    // int n; 
    // cout << "Enter the number of cities: "; 
    // cin >> n; 
    // vector<vector<int>> dist(n, vector<int>(n)); 
    // cout << "Enter the distance matrix (use a large number like 1000000 for no path):\n"; 
    // for (int i = 0; i < n; ++i) { 
    //     for (int j = 0; j < n; ++j) { 
    //         cin >> dist[i][j]; 
    //     } 
    // }  
 
    int n = dist.size(); 
    vector<vector<int>> dp(n, vector<int>(1 << n, -1)); // DP table ini alized to -1 
 
    int minCost = tsp(0, 1, dist, dp); // Start from city 0 with only city 0 visited 
 
    cout << "Minimum travel cost to visit all ci es and return to start: " << minCost << endl; 
    return 0; 
} `,
  },
  {
    title:
      " Implement the Floyd-Warshall algorithm to compute the shortest paths between all pairs of ver ces in a weighted, directed graph. Accept the graph as an adjacency matrix input, and display the final shortest path matrix, showing the minimum distances between each pair of vertices.  ",
    description: "unit 5.4",
    code: `#include <iostream> 
#include <vector> 
#include <climits> 
 
using namespace std; 
 
void floydWarshall(vector<vector<int>>& graph) { 
    int n = graph.size(); 
    vector<vector<int>> dist = graph; 
 
    // Floyd-Warshall algorithm to compute shortest paths 
    for (int k = 0; k < n; ++k) { 
        for (int i = 0; i < n; ++i) { 
            for (int j = 0; j < n; ++j) { 
                if (dist[i][k] != INT_MAX && dist[k][j] != INT_MAX  
                    && dist[i][j] > dist[i][k] + dist[k][j]) { 
                    dist[i][j] = dist[i][k] + dist[k][j]; 
                } 
            } 
        } 
    } 
 
    // Display the shortest path matrix 
    cout << "Shortest path matrix:\n"; 
    for (int i = 0; i < n; ++i) { 
        for (int j = 0; j < n; ++j) { 
            if (dist[i][j] == INT_MAX) 
                cout << "INF "; 
            else 
                cout << dist[i][j] << " "; 
        } 
        cout << endl; 
    } 
} 
 
int main() { 
    // Input adjacency matrix for the graph 
    int n; 
    cout << "Enter the number of ver ces: "; 
    cin >> n; 
 
    vector<vector<int>> graph(n, vector<int>(n)); 
    cout << "Enter the adjacency matrix (use " << INT_MAX << " for infinity):\n"; 
    for (int i = 0; i < n; ++i) { 
        for (int j = 0; j < n; ++j) { 
            cin >> graph[i][j]; 
        } 
    } 
 
    floydWarshall(graph); 
    return 0; 
    /*
        Enter the number of vertices: 4
Enter the adjacency matrix (use 2147483647 for infinity):
0 3 2147483647 5
2 0 2147483647 4
2147483647 1 0 2147483647
2147483647 2147483647 2 0

    */
}`,
  },
  {
    title:
      " Implement the Travelling Salesman Problem (TSP) using dynamic programming to find the minimum cost of visiting a set of cities exactly once and returning to the starting city. Allow the user to input the distance matrix and output the minimum travel cost and the optimal path.",
    description: "unit 5.5",
    code: `#include <iostream> 
#include <vector> 
#include <climits> 
 
using namespace std; 
 
int tsp(int pos, int visited, const vector<vector<int>>& dist, vector<vector<int>>& dp, 
vector<vector<int>>& path) { 
    int n = dist.size(); 
 
    // Base case: All ci es are visited, return cost to return to star ng city 
    if (visited == (1 << n) - 1) { 
        return dist[pos][0]; 
    } 
 
    // If result is already computed, return it 
    if (dp[pos][visited] != -1) { 
        return dp[pos][visited]; 
    } 
 
    int minCost = INT_MAX; 
    int bestCity = -1; 
 
    // Try visi ng all unvisited ci es and take the minimum cost path 
    for (int city = 0; city < n; ++city) { 
        if ((visited & (1 << city)) == 0) { // Check if city is not visited 
            int newCost = dist[pos][city] + tsp(city, visited | (1 << city), dist, dp, path); 
            if (newCost < minCost) { 
                minCost = newCost; 
                bestCity = city; 
            } 
        } 
    } 
 
    // Store the result and update the path 
    dp[pos][visited] = minCost; 
    path[pos][visited] = bestCity; 
    return minCost; 
} 
 
void printPath(int start, const vector<vector<int>>& path) { 
    int n = path.size(); 
    int visited = 1; 
    int pos = start; 
 
    cout << "Optimal path: " << pos << " "; 
    while (path[pos][visited] != -1) { 
        pos = path[pos][visited]; 
        visited |= (1 << pos); 
        cout << "-> " << pos << " "; 
    } 
    cout << "-> " << start << endl; 
} 
 
int main() { 
    int n; 
    cout << "Enter the number of cities: "; 
    cin >> n; 
 
    vector<vector<int>> dist(n, vector<int>(n)); 
    cout << "Enter the distance matrix (use a large number like 1000000 for no path):\n"; 
    for (int i = 0; i < n; ++i) { 
        for (int j = 0; j < n; ++j) { 
            cin >> dist[i][j]; 
        } 
    } 
 
    vector<vector<int>> dp(n, vector<int>(1 << n, -1)); // DP table ini alized to -1 
    vector<vector<int>> path(n, vector<int>(1 << n, -1)); // Path table to reconstruct the route 
 
    int minCost = tsp(0, 1, dist, dp, path); // Start from city 0 with only the star ng city visited 
 
    cout << "Minimum travel cost to visit all ci es and return to start: " << minCost << endl; 
    printPath(0, path); 
 
    return 0; 
    /*
        Enter the number of cities: 4
Enter the distance matrix (use a large number like 1000000 for no path):
0 10 15 20
10 0 35 25
15 35 0 30
20 25 30 0

    */
}`,
  },
  {
    title:
      "Given a set of projects, each with a profit and a resource requirement, determine the combination of projects that maximizes total profit without exceeding a given resource limit using 0/1 knapsack problem.",
    description: "unit 5.6",
    code: `#include <iostream>
#include <vector>
#include <algorithm>

using namespace std;

// Function to solve the 0/1 Knapsack problem
int knapsack(const vector<int>& profits, const vector<int>& resources, int resourceLimit, vector<vector<int>>& dp) {
    int n = profits.size();

    // Fill dp table
    for (int i = 1; i <= n; ++i) {
        for (int j = 0; j <= resourceLimit; ++j) {
            if (resources[i - 1] <= j) {
                dp[i][j] = max(dp[i - 1][j], dp[i - 1][j - resources[i - 1]] + profits[i - 1]);
            } else {
                dp[i][j] = dp[i - 1][j];
            }
        }
    }

    // Maximum profit is found at dp[n][resourceLimit]
    return dp[n][resourceLimit];
}

// Function to reconstruct the selected projects
vector<int> getSelectedProjects(const vector<int>& profits, const vector<int>& resources, int resourceLimit, const vector<vector<int>>& dp) {
    int n = profits.size();
    vector<int> selectedProjects;

    int w = resourceLimit;
    for (int i = n; i > 0 && w > 0; --i) {
        if (dp[i][w] != dp[i - 1][w]) {
            selectedProjects.push_back(i - 1); // Add project index to selectedProjects
            w -= resources[i - 1];
        }
    }

    reverse(selectedProjects.begin(), selectedProjects.end());
    return selectedProjects;
}

int main() {
    int n, resourceLimit;

    cout << "Enter the number of projects: ";
    cin >> n;

    vector<int> profits(n), resources(n);

    cout << "Enter the profits of the projects: ";
    for (int i = 0; i < n; ++i) {
        cin >> profits[i];
    }

    cout << "Enter the resource requirements of the projects: ";
    for (int i = 0; i < n; ++i) {
        cin >> resources[i];
    }

    cout << "Enter the resource limit: ";
    cin >> resourceLimit;

    // Initialize dp table
    vector<vector<int>> dp(n + 1, vector<int>(resourceLimit + 1, 0));

    // Calculate the maximum profit using knapsack
    int maxProfit = knapsack(profits, resources, resourceLimit, dp);

    // Get the selected projects
    vector<int> selectedProjects = getSelectedProjects(profits, resources, resourceLimit, dp);

    cout << "Maximum profit: " << maxProfit << endl;
    cout << "Selected projects: ";
    for (int project : selectedProjects) {
        cout << project + 1 << " "; // Print project indices (1-based)
    }
    cout << endl;

    return 0; 
    /*
    Enter the number of projects: 4
Enter the profits of the projects: 60 100 120 80
Enter the resource requirements of the projects: 10 20 30 25
Enter the resource limit: 50

    */
} `,
  },
  {
    title:
      "Write a program to solve the Eight Queens problem using backtracking. The program should place eight queens on an 8x8 chessboard such that no two queens threaten each other. Display one of the possible solutions with the placement of queens.",
    description: "unit 6.1",
    code: `#include <iostream> 
#include <vector> 
 
using namespace std; 
 
// Size of the chessboard 
const int N = 8; 
 
// Func on to print the chessboard with queens placed 
void printSolution(const vector<vector<int>>& board) { 
    for (int i = 0; i < N; ++i) { 
        for (int j = 0; j < N; ++j) { 
            if (board[i][j] == 1) 
                cout << "Q "; 
            else 
                cout << ". "; 
        } 
        cout << endl; 
    } 
    cout << endl; 
} 
 
// Check if a queen can be placed at board[row][col] 
bool isSafe(const vector<vector<int>>& board, int row, int col) { 
    // Check this row on le side 
    for (int i = 0; i < col; ++i) 
        if (board[row][i] == 1) 
            return false; 
 
    // Check upper diagonal on le side 
    for (int i = row, j = col; i >= 0 && j >= 0; --i, --j) 
        if (board[i][j] == 1) 
            return false; 
 
    // Check lower diagonal on le side 
    for (int i = row, j = col; j >= 0 && i < N; ++i, --j) 
        if (board[i][j] == 1) 
            return false; 
 
    return true; 
} 
 
// Func on to solve the N-Queens problem using backtracking 
bool solveNQueens(vector<vector<int>>& board, int col) { 
    // Base case: All queens are placed 
    if (col >= N) 
        return true; 
 
    // Consider this column and try placing this queen in all rows one by one 
    for (int i = 0; i < N; ++i) { 
        if (isSafe(board, i, col)) { 
            board[i][col] = 1; // Place the queen 
 
            // Recursively place the rest of the queens 
            if (solveNQueens(board, col + 1)) 
                return true; 
 
            // If placing queen in board[i][col] doesn't lead to a solu on, 
            // then remove queen from board[i][col] (backtrack) 
            board[i][col] = 0; 
        } 
    } 
    return false; // If the queen cannot be placed in any row in this column 
} 
 
int main() { 
    vector<vector<int>> board(N, vector<int>(N, 0)); // Initialize board with 0s 
 
    if (solveNQueens(board, 0)) { 
        cout << "One of the solutions to the Eight Queens problem:\n"; 
        printSolution(board); 
    } else { 
        cout << "No solution exists for the Eight Queens problem.\n"; 
    } 
 
    return 0; 
} `,
  },
  {
    title:
      "Implement a program to solve a 9x9 Sudoku puzzle using backtracking. Accept a partially filled board as input and display the completed board if a solution exists. ",
    description: "unit 6.2",
    code: `#include <iostream> 
#include <vector> 
 
using namespace std; 
 
#define N 9 
 
// Function to print the Sudoku board 
void printBoard(const vector<vector<int>>& board) { 
    for (int row = 0; row < N; ++row) { 
        for (int col = 0; col < N; ++col) { 
            cout << board[row][col] << " "; 
        } 
        cout << endl; 
    } 
} 
 
// Func on to check if placing num in board[row][col] is valid 
bool isSafe(const vector<vector<int>>& board, int row, int col, int num) { 
    // Check the row 
    for (int x = 0; x < N; ++x) { 
        if (board[row][x] == num) { 
            return false; 
        } 
    } 
 
    // Check the column 
    for (int x = 0; x < N; ++x) { 
        if (board[x][col] == num) { 
            return false; 
        } 
    } 
 
    // Check the 3x3 sub-grid 
    int startRow = row - row % 3; 
    int startCol = col - col % 3; 
    for (int i = 0; i < 3; ++i) { 
        for (int j = 0; j < 3; ++j) { 
            if (board[i + startRow][j + startCol] == num) { 
                return false; 
            } 
        } 
    } 
 
    return true; 
} 
 
// Recursive func on to solve the Sudoku board using backtracking 
bool solveSudoku(vector<vector<int>>& board) { 
    int row = -1; 
    int col = -1; 
    bool isEmpty = false; 
 
    // Find an empty cell 
    for (int i = 0; i < N; ++i) { 
        for (int j = 0; j < N; ++j) { 
            if (board[i][j] == 0) { 
                row = i; 
                col = j; 
                isEmpty = true; 
                break; 
            } 
        } 
        if (isEmpty) break; 
    } 
 
    // No empty cell le , board is solved 
    if (!isEmpty) return true; 
 
    // Try placing digits 1 to 9 in the empty cell 
    for (int num = 1; num <= 9; ++num) { 
        if (isSafe(board, row, col, num)) { 
            board[row][col] = num; // Place num 
 
            if (solveSudoku(board)) { 
                return true; 
            } 
 
            board[row][col] = 0; // Backtrack 
        } 
    } 
 
    return false; // Trigger backtracking 
} 
 
int main() { 
    vector<vector<int>> board(N, vector<int>(N)); 
 
    cout << "Enter the Sudoku puzzle (enter 0 for empty cells):\n"; 
    for (int i = 0; i < N; ++i) { 
        for (int j = 0; j < N; ++j) { 
            cin >> board[i][j]; 
        } 
    } 
 
    if (solveSudoku(board)) { 
        cout << "Solved Sudoku puzzle:\n"; 
        printBoard(board); 
    } else { 
        cout << "No solution exists.\n"; 
    } 
 
    return 0;  
    /*5 3 0 0 7 0 0 0 0
      6 0 0 1 9 5 0 0 0
      0 9 8 0 0 0 0 6 0
      8 0 0 0 6 0 0 0 3
      4 0 0 8 0 3 0 0 1
      7 0 0 0 2 0 0 0 6
      0 6 0 0 0 0 2 8 0
      0 0 0 4 1 9 0 0 5
      0 0 0 0 8 0 0 7 9
      */
} `,
  },
  {
    title:
      "Implement the Travelling Salesman Problem (TSP) using backtracking to find the minimum-cost path that visits each city exactly once and returns to the starting city. Accept a distance matrix as input and display the minimum path and cost. ",
    description: "unit 6.3",
    code: `#include <iostream>
#include <vector>
#include <climits>

using namespace std;

// Function to find the minimum-cost path using backtracking
void tspBacktracking(vector<vector<int>>& dist, vector<bool>& visited, vector<int>& currentPath, vector<int>& bestPath, int& minCost, int currentCost, int level, int currentCity, int n) {
    if (level == n) {
        // Add the cost of returning to the starting city
        int totalCost = currentCost + dist[currentCity][0];
        if (totalCost < minCost) {
            minCost = totalCost;
            bestPath = currentPath;
        }
        return;
    }

    // Explore all cities not yet visited
    for (int i = 0; i < n; i++) {
        if (!visited[i] && dist[currentCity][i] != 0) {
            visited[i] = true;
            currentPath[level] = i;
            tspBacktracking(dist, visited, currentPath, bestPath, minCost, currentCost + dist[currentCity][i], level + 1, i, n);
            visited[i] = false;
        }
    }
}

void solveTSP(vector<vector<int>>& dist, int n) {
    vector<bool> visited(n, false);
    vector<int> currentPath(n), bestPath(n);
    int minCost = INT_MAX;

    visited[0] = true; // Start from the first city (0)
    currentPath[0] = 0;

    // Perform backtracking to find the optimal path
    tspBacktracking(dist, visited, currentPath, bestPath, minCost, 0, 1, 0, n);

    // Output the results
    cout << "Minimum Cost: " << minCost << endl;
    cout << "Optimal Path: ";
    for (int i = 0; i < n; i++) {
        cout << bestPath[i] << " ";
    }
    cout << "0" << endl; // Return to the starting city
}

int main() {
    int n;

    cout << "Enter the number of cities: ";
    cin >> n;

    vector<vector<int>> dist(n, vector<int>(n));

    cout << "Enter the distance matrix:" << endl;
    for (int i = 0; i < n; i++) {
        for (int j = 0; j < n; j++) {
            cin >> dist[i][j];
        }
    }

    solveTSP(dist, n);

    return 0;
}`,
  },
  {
    title:
      "Write a program to solve the Travelling Salesman Problem (TSP) using Branch and Bound to find the minimum-cost tour. Accept a distance matrix as input, and display the minimum cost and the path of the tour. ",
    description: "unit 6.4",
    code: `#include <iostream>
#include <climits>
#include <vector>
#include <algorithm>
#include <functional>

using namespace std;

// Function to calculate the lower bound for a node
int calculateLowerBound(vector<vector<int>>& dist, vector<int>& path, int n, int currentNode) {
    int lowerBound = 0;

    // Calculate the sum of distances for the current path
    for (size_t i = 0; i < path.size() - 1; i++) {
        lowerBound += dist[path[i]][path[i + 1]];
    }

    // Add the distance from the current node to the nearest unvisited node
    int minEdge = INT_MAX;
    for (int i = 0; i < n; i++) {
        if (find(path.begin(), path.end(), i) == path.end() && dist[currentNode][i] != 0) {
            minEdge = min(minEdge, dist[currentNode][i]);
        }
    }
    lowerBound += (minEdge == INT_MAX) ? 0 : minEdge;

    return lowerBound;
}

// Branch and Bound to solve TSP
void branchAndBound(vector<vector<int>>& dist, int n) {
    vector<int> path(1, 0); // Start with the first city (0)
    vector<bool> visited(n, false);
    visited[0] = true;
    int minCost = INT_MAX;
    vector<int> bestPath;

    function<void(int, int)> dfs = [&](int currentNode, int count) {
        if (count == n) {
            // Add the cost of returning to the starting point
            int cost = 0;
            for (size_t i = 0; i < path.size() - 1; i++) {
                cost += dist[path[i]][path[i + 1]];
            }
            cost += dist[path.back()][path[0]];

            // Check if we found a better path
            if (cost < minCost) {
                minCost = cost;
                bestPath = path;
            }
            return;
        }

        // Try each node and branch
        for (int i = 0; i < n; i++) {
            if (!visited[i] && dist[currentNode][i] != 0) {
                visited[i] = true;
                path.push_back(i);

                // Lower bound calculation to prune the branch
                int lowerBound = calculateLowerBound(dist, path, n, i);

                if (lowerBound < minCost) {
                    dfs(i, count + 1);
                }

                path.pop_back();
                visited[i] = false;
            }
        }
    };

    dfs(0, 1);

    // Output the result
    cout << "Minimum Cost: " << minCost << endl;
    cout << "Optimal Path: ";`,
  },
  {
    title:
      "Solve the 0-1 knapsack problem using branch and bound to maximize the profit without exceeding the weight limit.",
    description: "unit 6.5",
    code: `#include <iostream> 
#include <vector> 
#include <algorithm> 
#include <climits> 
using namespace std; 
// Structure to store an item 
struct Item { 
int weight; 
int profit; 
}; 
// Structure to store a node in the Branch and Bound tree 
struct Node { 
int level;   // Level of the node (index of the item considered) 
int profit;  // Profit accumulated so far 
int weight;  // Weight accumulated so far 
float bound; // Upper bound of the profit 
}; 
// Func on to calculate the upper bound of profit for the current node 
float calculateBound(Node u, int n, int W, vector<Item>& items) { 
    if (u.weight >= W) return 0;  // If the weight exceeds capacity, return 0 
 
    // Ini alize bound with the profit accumulated so far 
    float bound = u.profit; 
 
    // Start including items in the bound calcula on un l we exceed capacity 
    int j = u.level + 1; 
    int totalWeight = u.weight; 
 
    while (j < n && totalWeight + items[j].weight <= W) { 
        totalWeight += items[j].weight; 
        bound += items[j].profit; 
        j++; 
    } 
 
    // If there's s ll room, take a frac on of the next item (frac onal knapsack) 
    if (j < n) { 
        bound += (W - totalWeight) * items[j].profit / float(items[j].weight); 
    } 
 
    return bound; 
} 
 
// Func on to solve 0/1 Knapsack Problem using Branch and Bound 
void knapsackBranchAndBound(int n, int W, vector<Item>& items) { 
    // Sort the items based on profit/weight ra o 
    sort(items.begin(), items.end(), [](Item a, Item b) { 
        return (float(a.profit) / a.weight) > (float(b.profit) / b.weight); 
    }); 
 
    // Priority queue or deque to store nodes (nodes with higher bound should be processed first) 
    vector<Node> queue; 
    Node u, v; 
    u.level = -1; 
    u.profit = 0; 
    u.weight = 0; 
    u.bound = 0.0; 
 
    // Compute the bound of the root node 
    u.bound = calculateBound(u, n, W, items); 
    queue.push_back(u); 
 
    int maxProfit = 0;  // To store the maximum profit found 
    vector<int> solution(n, 0);  // To store the opmal solu on 
 
    while (!queue.empty()) { 
        u = queue.back(); 
        queue.pop_back(); 
 
        // If the bound is greater than the maxProfit found, process the node 
        if (u.bound > maxProfit) { 
            // Consider the next item (include it) 
            v.level = u.level + 1; 
            v.weight = u.weight + items[v.level].weight; 
            v.profit = u.profit + items[v.level].profit; 
 
            if (v.weight <= W && v.profit > maxProfit) { 
                maxProfit = v.profit; 
                solution[v.level] = 1; 
            } 
 
            // Compute the bound for this new node 
            v.bound = calculateBound(v, n, W, items); 
            if (v.bound > maxProfit) { 
                queue.push_back(v); 
            } 
 
            // Consider the next item (exclude it) 
            v.weight = u.weight; 
            v.profit = u.profit; 
            v.bound = calculateBound(v, n, W, items); 
            if (v.bound > maxProfit) { 
                queue.push_back(v); 
            } 
        } 
    } 
 
    // Display the results 
    cout << "Maximum profit: " << maxProfit << endl; 
    cout << "Items selected: "; 
    for (int i = 0; i < n; i++) { 
        if (solution[i]) { 
            cout << i << " "; 
        } 
    } 
    cout << endl; 
} 
 
int main() { 
    // Example input 
    int n = 4; // Number of items 
    int W = 50; // Maximum weight capacity 
 
    vector<Item> items = {{10, 60}, {20, 100}, {30, 120}, {40, 80}}; // {weight, profit} 
 
    cout << "Solving 0/1 Knapsack Problem using Branch and Bound...\n"; 
    knapsackBranchAndBound(n, W, items); 
 
    return 0; 
} `,
  },
  {
    title:
      "Solve a maze where a rat has to reach the destination from the starting point using backtracking. Print all possible paths if multiple solutions exist.  ",
    description: "unit 6.6",
    code: `#include <iostream> 
#include <vector> 
 
using namespace std; 
 
#define N 4  // Size of the maze (4x4 in this case) 
 
// Func on to print the path 
void printSolution(vector<vector<int>>& solution) { 
    for (int i = 0; i < N; i++) { 
        for (int j = 0; j < N; j++) { 
            cout << solution[i][j] << " "; 
        } 
        cout << endl; 
    } 
} 
 
// Func on to check if a posi on is safe to move (within bounds and not an obstacle) 
bool isSafe(int x, int y, vector<vector<int>>& maze, vector<vector<int>>& solution) { 
    // Check if (x, y) is inside the maze and not a blocked cell (0) 
    return (x >= 0 && x < N && y >= 0 && y < N && maze[x][y] == 1 && solution[x][y] == 0); 
} 
 
// Recursive func on to solve the maze using backtracking 
bool solveMazeUtil(int x, int y, vector<vector<int>>& maze, vector<vector<int>>& solution) { 
    // If the des na on is reached, mark the current posi on and return true 
    if (x == N - 1 && y == N - 1) { 
        solution[x][y] = 1; 
        return true; 
    } 
 
    // Check if maze[x][y] is a valid move 
    if (isSafe(x, y, maze, solution)) { 
        // Mark the current cell as part of the solu on path 
        solution[x][y] = 1; 
 
        // Move forward in the x direc on (downwards) 
        if (solveMazeUtil(x + 1, y, maze, solution)) { 
            return true; 
        } 
 
        // Move downwards in the y direc on (rightwards) 
        if (solveMazeUtil(x, y + 1, maze, solution)) { 
            return true; 
        } 
 
        // If moving in either direc on doesn't work, backtrack 
        solution[x][y] = 0; 
        return false; 
    } 
 
    return false; 
} 
 
// Func on to solve the maze 
bool solveMaze(vector<vector<int>>& maze) { 
    vector<vector<int>> solution(N, vector<int>(N, 0)); 
 
    // Start solving the maze from the top-le corner (0, 0) 
    if (solveMazeUtil(0, 0, maze, solution)) { 
        printSolution(solution); 
        return true; 
    } 
 
    cout << "No solu on exists" << endl; 
    return false; 
} 
 
int main() { 
    // Example maze (1 - open cell, 0 - blocked cell) 
    vector<vector<int>> maze = { 
        {1, 0, 0, 0}, 
        {1, 1, 0, 1}, 
        {0, 1, 0, 0}, 
        {1, 1, 1, 1} 
    }; 
 
    cout << "Solving maze using backtracking..." << endl; 
    if (!solveMaze(maze)) { 
        cout << "No path exists from the start to the des na on." << endl; 
} 
return 0; 
} `,
  },
  {
    title: "ALL",
    description: "All Programs",
    code: `#include <iostream> // Design a hash table to manage a product catalog. Each product has a unique product ID, name, and price. Use linear probing for collision resolu on. Implement opera ons to add, search, update, and delete a product. 
  #include <string>
  using namespace std;
  
  const int TABLE_SIZE = 100;
  
  struct Product {
      int productID;
      string name;
      double price;
      bool isDeleted;
  
      Product() : productID(-1), name(""), price(0.0), isDeleted(false) {}
      Product(int id, string name, double price) : productID(id), name(name), price(price), isDeleted(false) {}
  };
  
  class HashTable {
  private:
      Product table[TABLE_SIZE];
  
      int hashFunction(int key) {
          return key % TABLE_SIZE;
      }
  
  public:
      void addProduct(int productID, string name, double price) {
          int index = hashFunction(productID);
          int originalIndex = index;
          bool placed = false;
  
          while (!placed) {
              if (table[index].productID == -1 || table[index].isDeleted) {
                  table[index] = Product(productID, name, price);
                  placed = true;
              } else {
                  index = (index + 1) % TABLE_SIZE;
                  if (index == originalIndex) {
                      cout << "Hash table is full!" << endl;
                      return;
                  }
              }
          }
      }
  
      Product* searchProduct(int productID) {
          int index = hashFunction(productID);
          int originalIndex = index;
  
          while (table[index].productID != -1) {
              if (table[index].productID == productID && !table[index].isDeleted) {
                  return &table[index];
              }
              index = (index + 1) % TABLE_SIZE;
              if (index == originalIndex) break;
          }
          return nullptr;
      }
  
      void updateProduct(int productID, string name, double price) {
          Product* product = searchProduct(productID);
          if (product) {
              product->name = name;
              product->price = price;
              cout << "Product updated successfully." << endl;
          } else {
              cout << "Product not found." << endl;
          }
      }
  
      void deleteProduct(int productID) {
          Product* product = searchProduct(productID);
          if (product) {
              product->isDeleted = true;
              cout << "Product deleted successfully." << endl;
          } else {
              cout << "Product not found." << endl;
          }
      }
  
      void displayTable() {
          for (int i = 0; i < TABLE_SIZE; ++i) {
              if (table[i].productID != -1 && !table[i].isDeleted) {
                  cout << "Index " << i << ": "
                       << "ProductID: " << table[i].productID << ", "
                       << "Name: " << table[i].name << ", "
                       << "Price: " << table[i].price << endl;
              }
          }
      }
  };
  
  int main() {
      HashTable catalog;
  
      catalog.addProduct(101, "Laptop", 1500.0);
      catalog.addProduct(102, "Smartphone", 800.0);
      catalog.addProduct(103, "Headphones", 150.0);
  
      catalog.displayTable();
  
      Product* found = catalog.searchProduct(102);
      if (found) {
          cout << "Product found: " << found->name << " - $" << found->price << endl;
      }
  
      catalog.updateProduct(103, "Wireless Headphones", 200.0);
      catalog.deleteProduct(101);
  
      cout << "\nAfter Updates:" << endl;
      catalog.displayTable();
  
      return 0;
  }
       
      #include <iostream> //Create a hash table to manage employee records. Each record should include an employee ID, name, and department. Use chaining with linked lists for collision handling. Support adding, searching, and dele ng employee records 
  #include <string>
  #include <list>
  using namespace std;
  
  struct Employee {
      int employeeID;
      string name;
      string department;
  
      Employee(int id, string name, string department) : employeeID(id), name(name), department(department) {}
  };
  
  const int TABLE_SIZE = 10;
  
  class HashTable {
  private:
      list<Employee> table[TABLE_SIZE];
  
      int hashFunction(int key) {
          return key % TABLE_SIZE;
      }
  
  public:
      void addEmployee(int employeeID, string name, string department) {
          int index = hashFunction(employeeID);
          table[index].emplace_back(employeeID, name, department);
          cout << "Employee added successfully." << endl;
      }
  
      Employee* searchEmployee(int employeeID) {
          int index = hashFunction(employeeID);
          for (auto& emp : table[index]) {
              if (emp.employeeID == employeeID) {
                  return &emp;
              }
          }
          return nullptr;
      }
  
      void deleteEmployee(int employeeID) {
          int index = hashFunction(employeeID);
          for (auto it = table[index].begin(); it != table[index].end(); ++it) {
              if (it->employeeID == employeeID) {
                  table[index].erase(it);
                  cout << "Employee deleted successfully." << endl;
                  return;
              }
          }
          cout << "Employee not found." << endl;
      }
  
      void displayTable() {
          for (int i = 0; i < TABLE_SIZE; ++i) {
              cout << "Index " << i << ": ";
              for (const auto& emp : table[i]) {
                  cout << "[ID: " << emp.employeeID << ", Name: " << emp.name << ", Dept: " << emp.department << "] -> ";
              }
              cout << "nullptr" << endl;
          }
      }
  };
  
  int main() {
      HashTable employees;
  
      employees.addEmployee(101, "Alice", "HR");
      employees.addEmployee(102, "Bob", "Engineering");
      employees.addEmployee(203, "Charlie", "Finance");
  
      employees.displayTable();
  
      Employee* found = employees.searchEmployee(102);
      if (found) {
          cout << "Employee found: " << found->name << ", Department: " << found->department << endl;
      }
  
      employees.deleteEmployee(101);
  
      cout << "\nAfter Deletion:" << endl;
      employees.displayTable();
  
      return 0;
  }
  
  #include <iostream> // Develop a hash table that stores students’ roll numbers as keys and their grades as values. Use quadra c probing for collision resolu on. Implement insert, search, and delete func ons to manage grades efficiently
  using namespace std;
  
  const int TABLE_SIZE = 100;
  
  struct Student {
      int rollNumber;
      char grade;
      bool isDeleted;
  
      Student() : rollNumber(-1), grade(' '), isDeleted(false) {}
      Student(int roll, char g) : rollNumber(roll), grade(g), isDeleted(false) {}
  };
  
  class HashTable {
  private:
      Student table[TABLE_SIZE];
  
      int hashFunction(int key) {
          return key % TABLE_SIZE;
      }
  
  public:
      void insert(int rollNumber, char grade) {
          int index = hashFunction(rollNumber);
          int i = 0;
  
          while (table[(index + i * i) % TABLE_SIZE].rollNumber != -1 &&
                 !table[(index + i * i) % TABLE_SIZE].isDeleted &&
                 table[(index + i * i) % TABLE_SIZE].rollNumber != rollNumber) {
              i++;
              if (i >= TABLE_SIZE) {
                  cout << "Hash table is full!" << endl;
                  return;
              }
          }
  
          int finalIndex = (index + i * i) % TABLE_SIZE;
          table[finalIndex] = Student(rollNumber, grade);
          cout << "Student grade added successfully." << endl;
      }
  
      char search(int rollNumber) {
          int index = hashFunction(rollNumber);
          int i = 0;
  
          while (table[(index + i * i) % TABLE_SIZE].rollNumber != -1) {
              int finalIndex = (index + i * i) % TABLE_SIZE;
              if (table[finalIndex].rollNumber == rollNumber && !table[finalIndex].isDeleted) {
                  return table[finalIndex].grade;
              }
              i++;
              if (i >= TABLE_SIZE) break;
          }
          return ' ';
      }
  
      void deleteStudent(int rollNumber) {
          int index = hashFunction(rollNumber);
          int i = 0;
  
          while (table[(index + i * i) % TABLE_SIZE].rollNumber != -1) {
              int finalIndex = (index + i * i) % TABLE_SIZE;
              if (table[finalIndex].rollNumber == rollNumber && !table[finalIndex].isDeleted) {
                  table[finalIndex].isDeleted = true;
                  cout << "Student grade deleted successfully." << endl;
                  return;
              }
              i++;
              if (i >= TABLE_SIZE) break;
          }
          cout << "Student not found." << endl;
      }
  
      void displayTable() {
          for (int i = 0; i < TABLE_SIZE; ++i) {
              if (table[i].rollNumber != -1 && !table[i].isDeleted) {
                  cout << "Index " << i << ": Roll Number: " << table[i].rollNumber 
                       << ", Grade: " << table[i].grade << endl;
              }
          }
      }
  };
  
  int main() {
      HashTable grades;
  
      grades.insert(101, 'A');
      grades.insert(102, 'B');
      grades.insert(203, 'C');
  
      grades.displayTable();
  
      char foundGrade = grades.search(102);
      if (foundGrade != ' ') {
          cout << "Grade for roll number 102: " << foundGrade << endl;
      } else {
          cout << "Student not found." << endl;
      }
  
      grades.deleteStudent(101);
  
      cout << "\nAfter Deletion:" << endl;
      grades.displayTable();
  
      return 0;
  }
  
  #include <iostream> //Implement a hash table to store integer values using a simple modulo-based hash func on. Define the size of the hash table as 10. Implement insert and search func ons, and demonstrate them by inser ng values into the table and searching for specific values.
  #include <vector>
  using namespace std;
  
  const int TABLE_SIZE = 10;
  
  class HashTable {
  private:
      vector<int> table[TABLE_SIZE];  // Using separate chaining with vectors
  
      int hashFunction(int key) {
          return key % TABLE_SIZE;
      }
  
  public:
      void insert(int value) {
          int index = hashFunction(value);
          table[index].push_back(value);
          cout << "Inserted value " << value << " at index " << index << "." << endl;
      }
  
      bool search(int value) {
          int index = hashFunction(value);
          for (int i = 0; i < table[index].size(); ++i) {
              if (table[index][i] == value) {
                  cout << "Found value " << value << " at index " << index << "." << endl;
                  return true;
              }
          }
          cout << "Value " << value << " not found in the table." << endl;
          return false;
      }
  
      void displayTable() {
          for (int i = 0; i < TABLE_SIZE; ++i) {
              cout << "Index " << i << ": ";
              for (int value : table[i]) {
                  cout << value << " -> ";
              }
              cout << "nullptr" << endl;
          }
      }
  };
  
  int main() {
      HashTable ht;
  
      // Insert values
      ht.insert(5);
      ht.insert(15);
      ht.insert(25);
      ht.insert(35);
  
      // Display hash table
      cout << "\nHash Table contents:" << endl;
      ht.displayTable();
  
      // Search for specific values
      ht.search(15);
      ht.search(7);
  
      return 0;
  }
  
  
  #include <iostream> //Create a system to manage a parking lot. Each slot has a unique ID, and each vehicle has a registra on number. Use a hash table with linear probing to store vehicle informa on by slot ID and support func ons for adding, searching, and removing vehicles 
  #include <string>
  using namespace std;
  
  const int PARKING_SIZE = 20;
  
  struct Vehicle {
      int slotID;
      string regNumber;
      bool isOccupied;
  
      Vehicle() : slotID(-1), regNumber(""), isOccupied(false) {}
      Vehicle(int id, string reg) : slotID(id), regNumber(reg), isOccupied(true) {}
  };
  
  class ParkingLot {
  private:
      Vehicle parkingSlots[PARKING_SIZE];
  
      int hashFunction(int slotID) {
          return slotID % PARKING_SIZE;
      }
  
  public:
      void addVehicle(int slotID, string regNumber) {
          int index = hashFunction(slotID);
          int originalIndex = index;
          int i = 0;
  
          while (parkingSlots[index].isOccupied && parkingSlots[index].slotID != slotID) {
              index = (originalIndex + i) % PARKING_SIZE;
              i++;
              if (i >= PARKING_SIZE) {
                  cout << "Parking lot is full, cannot add vehicle." << endl;
                  return;
              }
          }
  
          parkingSlots[index] = Vehicle(slotID, regNumber);
          cout << "Vehicle with registration number " << regNumber << " added to slot " << slotID << "." << endl;
      }
  
      Vehicle* searchVehicle(int slotID) {
          int index = hashFunction(slotID);
          int originalIndex = index;
          int i = 0;
  
          while (parkingSlots[index].isOccupied) {
              if (parkingSlots[index].slotID == slotID) {
                  return &parkingSlots[index];
              }
              index = (originalIndex + i) % PARKING_SIZE;
              i++;
              if (i >= PARKING_SIZE) break;
          }
          return nullptr;
      }
  
      void removeVehicle(int slotID) {
          Vehicle* vehicle = searchVehicle(slotID);
          if (vehicle && vehicle->isOccupied) {
              vehicle->isOccupied = false;
              vehicle->slotID = -1;
              vehicle->regNumber = "";
              cout << "Vehicle removed from slot " << slotID << "." << endl;
          } else {
              cout << "Vehicle not found in slot " << slotID << "." << endl;
          }
      }
  
      void displayParkingLot() {
          for (int i = 0; i < PARKING_SIZE; ++i) {
              if (parkingSlots[i].isOccupied) {
                  cout << "Slot " << i << ": Registration Number: " << parkingSlots[i].regNumber << endl;
              } else {
                  cout << "Slot " << i << ": Empty" << endl;
              }
          }
      }
  };
  
  int main() {
      ParkingLot lot;
  
      // Add vehicles
      lot.addVehicle(1, "ABC123");
      lot.addVehicle(5, "XYZ987");
      lot.addVehicle(12, "LMN456");
  
      // Display parking lot
      cout << "\nParking Lot Status:" << endl;
      lot.displayParkingLot();
  
      // Search for a specific vehicle
      Vehicle* found = lot.searchVehicle(5);
      if (found) {
          cout << "Vehicle found in slot " << found->slotID << " with registration number: " << found->regNumber << endl;
      } else {
          cout << "Vehicle not found in slot 5." << endl;
      }
  
      // Remove a vehicle
      lot.removeVehicle(1);
  
      // Display parking lot after removal
      cout << "\nParking Lot Status after Removal:" << endl;
      lot.displayParkingLot();
  
      return 0;
  }
  
  #include <iostream> //Implement a system to track student a endance, with student roll numbers as keys and a counter for the number of classes a ended. Use chaining to handle collisions and provide functions for adding a endance, viewing total a endance, and reseting data.
  #include <list>
  #include <string>
  using namespace std;
  
  const int TABLE_SIZE = 10;
  
  struct Student {
      int rollNumber;
      int attendanceCount;
  
      Student(int roll) : rollNumber(roll), attendanceCount(0) {}
  };
  
  class AttendanceSystem {
  private:
      list<Student> table[TABLE_SIZE];
  
      int hashFunction(int rollNumber) {
          return rollNumber % TABLE_SIZE;
      }
  
  public:
      // Add attendance for a student
      void addAttendance(int rollNumber) {
          int index = hashFunction(rollNumber);
  
          // Search for the student in the chain
          for (auto& student : table[index]) {
              if (student.rollNumber == rollNumber) {
                  student.attendanceCount++;
                  cout << "Added attendance for student roll number " << rollNumber << "." << endl;
                  return;
              }
          }
  
          // If student is not found, add a new entry
          table[index].emplace_back(rollNumber);
          table[index].back().attendanceCount++;
          cout << "Student roll number " << rollNumber << " added with attendance count initialized to 1." << endl;
      }
  
      // View total attendance for a student
      int viewAttendance(int rollNumber) {
          int index = hashFunction(rollNumber);
  
          // Search for the student in the chain
          for (const auto& student : table[index]) {
              if (student.rollNumber == rollNumber) {
                  cout << "Total attendance for student roll number " << rollNumber << " is " << student.attendanceCount << " classes." << endl;
                  return student.attendanceCount;
              }
          }
  
          cout << "Student roll number " << rollNumber << " not found." << endl;
          return -1;
      }
  
      // Reset all attendance data
      void resetAttendance() {
          for (int i = 0; i < TABLE_SIZE; ++i) {
              table[i].clear();
          }
          cout << "All attendance data has been reset." << endl;
      }
  
      // Display attendance data for all students
      void displayAllAttendance() {
          cout << "Attendance data:" << endl;
          for (int i = 0; i < TABLE_SIZE; ++i) {
              cout << "Index " << i << ": ";
              for (const auto& student : table[i]) {
                  cout << "[Roll Number: " << student.rollNumber << ", Attendance: " << student.attendanceCount << "] -> ";
              }
              cout << "nullptr" << endl;
          }
      }
  };
  
  int main() {
      AttendanceSystem attendance;
  
      // Add attendance for students
      attendance.addAttendance(101);
      attendance.addAttendance(102);
      attendance.addAttendance(103);
      attendance.addAttendance(101);  // Increment attendance for roll number 101
  
      // Display all attendance
      cout << "\nDisplaying all attendance:" << endl;
      attendance.displayAllAttendance();
  
      // View total attendance for a specific student
      attendance.viewAttendance(101);
      attendance.viewAttendance(104);  // Test for a non-existent student
  
      // Reset attendance data
      attendance.resetAttendance();
  
      // Display all attendance after reset
      cout << "\nDisplaying all attendance after reset:" << endl;
      attendance.displayAllAttendance();
  
      return 0;
  }
  
  
  #include <iostream> //Write a program to implement chaining with linked lists as a collision resolution technique in a hash table. Store student records (Student ID and Name) and provide options to insert, delete, and search for a student record.
  #include <list> 
  #include <string> 
  using namespace std; 
   
  const int TABLE_SIZE = 10; 
   
  struct Student { 
      int studentID; 
      string name; 
   
      Student(int id, const string& studentName) : studentID(id), name(studentName) {} 
  }; 
   
  class HashTable { 
  private: 
      list<Student> table[TABLE_SIZE]; 
   
      int hashFunction(int studentID) { 
          return studentID % TABLE_SIZE; 
      } 
   
  public: 
      // Insert a student record 
      void insert(int studentID, const string& name) { 
          int index = hashFunction(studentID); 
   
          // Check if the student already exists, and if so, return without inser ng 
          for (const auto& student : table[index]) { 
              if (student.studentID == studentID) { 
                  cout << "Student with ID " << studentID << " already exists." << endl; 
                  return; 
              } 
          } 
   
          // Insert the new student 
          table[index].emplace_back(studentID, name); 
          cout << "Inserted student with ID " << studentID << " and Name " << name << "." << endl; 
      } 
   
      // Delete a student record 
      void remove(int studentID) { 
          int index = hashFunction(studentID); 
   
          for (auto it = table[index].begin(); it != table[index].end(); ++it) { 
              if (it->studentID == studentID) { 
                  table[index].erase(it); 
                  cout << "Deleted student with ID " << studentID << "." << endl; 
                  return; 
              } 
          } 
   
          cout << "Student with ID " << studentID << " not found." << endl; 
      } 
   
      // Search for a student record 
      void search(int studentID) { 
          int index = hashFunction(studentID); 
           for (const auto& student : table[index]) { 
              if (student.studentID == studentID) { 
                  cout << "Found student with ID " << studentID << " and Name " << student.name << "." << 
  endl; 
                  return; 
              } 
          } 
   
          cout << "Student with ID " << studentID << " not found." << endl; 
      } 
   
      // Display all student records 
      void displayTable() { 
          for (int i = 0; i < TABLE_SIZE; ++i) { 
              cout << "Index " << i << ": "; 
              for (const auto& student : table[i]) { 
                  cout << "[ID: " << student.studentID << ", Name: " << student.name << "] -> "; 
              } 
              cout << "nullptr" << endl; 
          } 
      } 
  }; 
   
  int main() { 
      HashTable ht; 
   
      // Insert student records 
      ht.insert(101, "Alice"); 
      ht.insert(102, "Bob"); 
      ht.insert(112, "Charlie");  // Causes a collision with ID 102 
      ht.insert(203, "David"); 
   
      // Display hash table contents 
      cout << "\nHash Table contents:" << endl; 
      ht.displayTable(); 
   
      // Search for a student 
      ht.search(102); 
      ht.search(999);  // Test for a non-existent student 
   
      // Delete a student record 
      ht.remove(112); 
   
      // Display hash table contents a er dele on 
      cout << "\nHash Table a er dele on:" << endl; 
      ht.displayTable(); 
   
      return 0; 
  }
  
  
  #include <iostream> //Implement a divide-and-conquer algorithm to find the closest pair of points in a 2D plane. This is a classic problem that can be efficiently solved with divide and conquer by recursively finding the minimum distance in subarrays
  #include <vector> 
  #include <cmath> 
  #include <algorithm> 
  #include <float.h> 
  using namespace std; 
  struct Point { 
  int x, y; 
  }; 
  // Compare points based on x-coordinate 
  bool compareX(const Point& p1, const Point& p2) { 
  return p1.x < p2.x; 
  } 
  // Compare points based on y-coordinate 
  bool compareY(const Point& p1, const Point& p2) { 
  return p1.y < p2.y; 
  } 
  // Calculate Euclidean distance between two points 
  double distance(const Point& p1, const Point& p2) { 
  return sqrt((p1.x - p2.x) * (p1.x - p2.x) + (p1.y - p2.y) * (p1.y - p2.y)); 
  } 
   
  // Brute-force approach to find the smallest distance for small point sets 
  double bruteForce(vector<Point>& points, int le , int right) { 
      double minDist = DBL_MAX; 
      for (int i = le ; i < right; ++i) { 
          for (int j = i + 1; j <= right; ++j) { 
              double dist = distance(points[i], points[j]); 
              if (dist < minDist) { 
                  minDist = dist; 
              } 
          } 
      } 
      return minDist; 
  } 
   
  // Find the minimum distance in a strip of points 
  double stripClosest(vector<Point>& strip, double d) { 
      double minDist = d; 
      sort(strip.begin(), strip.end(), compareY); 
   
      for (int i = 0; i < strip.size(); ++i) { 
          for (int j = i + 1; j < strip.size() && (strip[j].y - strip[i].y) < minDist; ++j) { 
              double dist = distance(strip[i], strip[j]); 
              if (dist < minDist) { 
                  minDist = dist; 
              } 
          } 
      } 
      return minDist; 
  } 
   
  // Recursive divide-and-conquer func on to find the smallest distance 
  double closestPairRec(vector<Point>& points, int le , int right) { 
      if (right - le <= 3) { 
          return bruteForce(points, le , right); 
      } 
   
      int mid = le + (right - le ) / 2; 
      Point midPoint = points[mid]; 
   
      double dl = closestPairRec(points, le , mid); 
      double dr = closestPairRec(points, mid + 1, right); 
   
      double d = min(dl, dr); 
   
      vector<Point> strip; 
      for (int i = le ; i <= right; ++i) { 
          if (abs(points[i].x - midPoint.x) < d) { 
              strip.push_back(points[i]); 
          } 
      } 
   
      return min(d, stripClosest(strip, d)); 
  } 
   
  // Main func on to find the closest pair of points 
  double closestPair(vector<Point>& points) { 
      sort(points.begin(), points.end(), compareX); 
      return closestPairRec(points, 0, points.size() - 1); 
  } 
   
  int main() { 
      vector<Point> points = {{2, 3}, {12, 30}, {40, 50}, {5, 1}, {12, 10}, {3, 4}}; 
   
      double minDistance = closestPair(points); 
      cout << "The smallest distance between a pair of points is: " << minDistance << endl; 
   
      return 0; 
  }
  
  #include <iostream> //Use the QuickSort algorithm to sort an array of transac on records by transac on amount. Implement the algorithm recursively and allow the user to input transac on records.
  #include <vector> 
  using namespace std; 
   
  struct Transaction { 
      int id; 
      double amount; 
   
      Transaction(int id, double amount) : id(id), amount(amount) {} 
  }; 
   
  int partion(vector<Transaction>& transactions, int low, int high) { 
      double pivot = transactions[high].amount; 
      int i = low - 1; 
   
      for (int j = low; j < high; ++j) { 
          if (transactions[j].amount < pivot) { 
              ++i; 
              swap(transactions[i], transactions[j]); 
          } 
      } 
      swap(transactions[i + 1], transactions[high]); 
      return i + 1; 
  } 
   
  void quickSort(vector<Transaction>& transactions, int low, int high) { 
      if (low < high) { 
          int pi = partion(transactions, low, high); 
          quickSort(transactions, low, pi - 1); 
          quickSort(transactions, pi + 1, high); 
      } 
  } 
   
  void displayTransactions(const vector<Transaction>& transactions) { 
     cout << "Sorted Transactions by Amount:\n"; 
      for (const auto& t : transactions) { 
          cout << "ID: " << t.id << ", Amount: " << t.amount << endl; 
      } 
  } 
   
  int main() { 
      int n; 
      cout << "Enter the number of transati ons: "; 
      cin >> n; 
   
      vector<Transaction> transactions; 
      for (int i = 0; i < n; ++i) { 
          int id; 
          double amount; 
          cout << "Enter transaction ID and amount: "; 
          cin >> id >> amount; 
          transactions.emplace_back(id, amount); 
      } 
   
      quickSort(transactions, 0, n - 1); 
      displayTransactions(transactions); 
   
      return 0; 
      /*
      Enter the number of transactions: 5
  Enter transaction ID and amount: 101 500.75
  Enter transaction ID and amount: 102 250.50
  Enter transaction ID and amount: 103 750.30
  Enter transaction ID and amount: 104 100.00
  Enter transaction ID and amount: 105 300.00
  
      */
  }
  
  
  #include <iostream> //Implement the Merge Sort technique to merge two pre-sorted arrays of customer orders into one sorted array. Display the combined sorted list of orders
  #include <vector> 
  using namespace std; 
   
  void mergeArrays(const vector<int>& arr1, const vector<int>& arr2, vector<int>& mergedArray) { 
      int i = 0, j = 0; 
      while (i < arr1.size() && j < arr2.size()) { 
          if (arr1[i] <= arr2[j]) { 
              mergedArray.push_back(arr1[i++]); 
          } else { 
              mergedArray.push_back(arr2[j++]); 
          } 
      } 
      while (i < arr1.size()) mergedArray.push_back(arr1[i++]); 
      while (j < arr2.size()) mergedArray.push_back(arr2[j++]); 
  } 
   
  void displayOrders(const vector<int>& orders) { 
      cout << "Merged Sorted Orders:\n"; 
      for (int order : orders) { 
          cout << order << " "; 
      } 
      cout << endl; 
  } 
   
  int main() { 
      vector<int> arr1 = {1, 5, 9, 12}; 
      vector<int> arr2 = {3, 6, 7, 10, 15}; 
   
      vector<int> mergedArray; 
      mergeArrays(arr1, arr2, mergedArray); 
      displayOrders(mergedArray); 
   
      return 0; 
  }
  
  #include <iostream> //Simulate a network rou ng algorithm using Dijkstra’s algorithm. The program should determine the shortest path from a source node to all other nodes in a given network.
  #include <vector> 
  #include <queue> 
  #include <limits> 
  using namespace std; 
   
  const int INF = numeric_limits<int>::max(); 
   
  void dijkstra(const vector<vector<pair<int, int>>>& graph, int source) { 
      int n = graph.size(); 
      vector<int> dist(n, INF); 
      dist[source] = 0; 
   
      priority_queue<pair<int, int>, vector<pair<int, int>>, greater<>> pq; 
      pq.emplace(0, source); 
   
      while (!pq.empty()) { 
          int d = pq.top().first; 
          int u = pq.top().second; 
          pq.pop(); 
   
          if (d > dist[u]) continue; 
   
          for (const auto& edge : graph[u]) { 
              int v = edge.first; 
              int weight = edge.second; 
              if (dist[u] + weight < dist[v]) { 
                  dist[v] = dist[u] + weight; 
                  pq.emplace(dist[v], v); 
              } 
          } 
      } 
   
      cout << "Shortest distances from source node " << source << ":\n"; 
      for (int i = 0; i < n; ++i) { 
          if (dist[i] == INF) 
              cout << "Node " << i << ": INF\n"; 
          else 
              cout << "Node " << i << ": " << dist[i] << endl; 
      } 
  } 
   
  int main() { 
      int n = 5; 
      vector<vector<pair<int, int>>> graph(n); 
       
      graph[0].push_back({1, 10}); 
      graph[0].push_back({2, 3}); 
      graph[1].push_back({3, 2}); 
      graph[2].push_back({1, 1}); 
      graph[2].push_back({3, 8}); 
      graph[3].push_back({4, 7}); 
      graph[4].push_back({0, 9}); 
   
      int source = 0; 
      dijkstra(graph, source); 
   
      return 0; 
  }
  
  
  #include <iostream> //Develop a program that finds the minimum spanning tree of a graph represen ng a telecommunica ons network using Prim's algorithm. The user should be able to view the total minimized connec on cost.
  #include <vector> 
  #include <queue> 
  using namespace std; 
   
  struct Edge { 
      int to, weight; 
  }; 
   
  int primMST(const vector<vector<Edge>>& graph) { 
      int n = graph.size(); 
      vector<bool> inMST(n, false); 
      priority_queue<pair<int, int>, vector<pair<int, int>>, greater<>> pq; 
      pq.emplace(0, 0); 
   
      int totalCost = 0; 
      while (!pq.empty()) { 
          int weight = pq.top().first; 
          int u = pq.top().second; 
          pq.pop(); 
   
          if (inMST[u]) continue; 
          inMST[u] = true; 
          totalCost += weight; 
   
          for (const Edge& edge : graph[u]) { 
              if (!inMST[edge.to]) { 
                  pq.emplace(edge.weight, edge.to); 
              } 
          } 
      } 
      return totalCost; 
  } 
   
  int main() { 
      int n = 5; 
      vector<vector<Edge>> graph(n); 
   
      graph[0].push_back({1, 2}); 
      graph[0].push_back({3, 6}); 
      graph[1].push_back({0, 2}); 
      graph[1].push_back({2, 3}); 
      graph[1].push_back({3, 8}); 
      graph[1].push_back({4, 5}); 
      graph[2].push_back({1, 3}); 
      graph[2].push_back({4, 7}); 
      graph[3].push_back({0, 6}); 
      graph[3].push_back({1, 8}); 
      graph[4].push_back({1, 5}); 
      graph[4].push_back({2, 7}); 
   
      int totalCost = primMST(graph); 
      cout << "Total minimized connec on cost for the network: " << totalCost << endl; 
   
      return 0; 
  }
  
  
  #include <iostream> //A company wants to maximize its profit by selecting projects based on available resources. Use the Fractional Knapsack problem to select the projects that yield the highest return within the resource limit.
  #include <vector>
  #include <algorithm>
  
  using namespace std;
  
  // Structure to represent a project
  struct Project {
      int id;
      double profit;
      double resource;
  
      Project(int id, double profit, double resource) : id(id), profit(profit), resource(resource) {}
  };
  
  // Comparator function to sort projects by profit-to-resource ratio in descending order
  bool compare(const Project& a, const Project& b) {
      return (a.profit / a.resource) > (b.profit / b.resource);
  }
  
  // Function to solve the Fractional Knapsack problem
  double fractionalKnapsack(vector<Project>& projects, double maxResources) {
      // Sort projects based on profit-to-resource ratio
      sort(projects.begin(), projects.end(), compare);
  
      double totalProfit = 0.0;
      for (const auto& project : projects) {
          if (maxResources >= project.resource) {
              maxResources -= project.resource;
              totalProfit += project.profit;
          } else {
              totalProfit += project.profit * (maxResources / project.resource);
              break;
          }
      }
      return totalProfit;
  }
  
  int main() {
      int n;
      double maxResources;
  
      cout << "Enter the number of projects: ";
      cin >> n;
  
      vector<Project> projects;
      cout << "Enter the profit and resource required for each project:\n";
      for (int i = 0; i < n; ++i) {
          double profit, resource;
          cout << "Project " << i + 1 << ": ";
          cin >> profit >> resource;
          projects.emplace_back(i + 1, profit, resource);
      }
  
      cout << "Enter the maximum available resources: ";
      cin >> maxResources;
  
      double maxProfit = fractionalKnapsack(projects, maxResources);
  
      cout << "Maximum profit within resource limit: " << maxProfit << endl;
  
      return 0;
      /*
      Enter the number of projects: 3
      Enter the profit and resource required for each project:
      Project 1: 60 10
      Project 2: 100 20
      Project 3: 120 30
      Enter the maximum available resources: 50
      */
  }
  
  
  
  
  #include <iostream> //Implement a binary search algorithm to quickly find the posi on of a specific book in a sorted list of ISBN numbers.
  #include <vector> 
  using namespace std; 
   
  int binarySearch(const vector<int>& isbns, int target) { 
      int le = 0, right = isbns.size() - 1; 
   
      while (le <= right) { 
          int mid = le + (right - le ) / 2; 
          if (isbns[mid] == target) { 
              return mid; 
          } else if (isbns[mid] < target) { 
              le = mid + 1; 
          } else { 
              right = mid - 1; 
          } 
      } 
      return -1; 
  } 
   
  int main() { 
      vector<int> isbns = {12345, 23456, 34567, 45678, 56789}; 
      int targetISBN = 34567; 
   
      int pos = binarySearch(isbns, targetISBN); 
      if (pos != -1) { 
          cout << "ISBN " << targetISBN << " found at posi on: " << pos << endl; 
      } else { 
          cout << "ISBN " << targetISBN << " not found." << endl; 
      } 
   
      return 0; 
  }
  
  
  #include <iostream> //Design a program to find the minimum cost to connect all ci es in a region by construc ng roads using Kruskal's algorithm. Input should include city pairs and road construction costs.
  #include <vector>
  #include <tuple>
  #include <algorithm>
  
  using namespace std;
  
  // Structure to represent a union-find data structure (disjoint set)
  class UnionFind {
  private:
      vector<int> parent, rank;
  
  public:
      UnionFind(int n) {
          parent.resize(n);
          rank.resize(n, 0);
          for (int i = 0; i < n; ++i) {
              parent[i] = i;
          }
      }
  
      // Find the representative of a set
      int find(int u) {
          if (u != parent[u]) {
              parent[u] = find(parent[u]); // Path compression
          }
          return parent[u];
      }
  
      // Union by rank
      bool unionSets(int u, int v) {
          int rootU = find(u);
          int rootV = find(v);
  
          if (rootU == rootV) return false; // They are already in the same set
  
          if (rank[rootU] > rank[rootV]) {
              parent[rootV] = rootU;
          } else if (rank[rootU] < rank[rootV]) {
              parent[rootU] = rootV;
          } else {
              parent[rootV] = rootU;
              rank[rootU]++;
          }
          return true;
      }
  };
  
  // Kruskal's algorithm to find MST
  int kruskal(int n, vector<tuple<int, int, int>>& edges) {
      // Sort edges by weight
      sort(edges.begin(), edges.end(), [](const auto& a, const auto& b) {
          return get<2>(a) < get<2>(b);
      });
  
      UnionFind uf(n);
      int minCost = 0;
  
      cout << "Selected roads for the minimum spanning tree:\n";
  
      for (const auto& edge : edges) {
          int u, v, cost;
          tie(u, v, cost) = edge;
  
          if (uf.unionSets(u, v)) {
              minCost += cost;
              cout << "Road between city " << u << " and city " << v << " with cost " << cost << "\n";
          }
      }
  
      return minCost;
  }
  
  int main() {
      int n, m;
  
      cout << "Enter the number of cities: ";
      cin >> n;
  
      cout << "Enter the number of possible roads: ";
      cin >> m;
  
      vector<tuple<int, int, int>> edges;
  
      cout << "Enter the roads in the format (city1 city2 cost):\n";
      for (int i = 0; i < m; ++i) {
          int u, v, cost;
          cin >> u >> v >> cost;
          edges.emplace_back(u, v, cost);
      }
  
      int minCost = kruskal(n, edges);
  
      cout << "Minimum cost to connect all cities: " << minCost << endl;
  
      return 0;
      /*
      Enter the number of cities: 4
  Enter the number of possible roads: 5
  Enter the roads in the format (city1 city2 cost):
  0 1 10
  0 2 6
  0 3 5
  1 3 15
  2 3 4
      */
  }
  
  
  #include <iostream> //Implement a greedy algorithm to schedule jobs within their deadlines to maximize profit. Each job has a profit and a deadline, and only one job can be performed at a time.
  #include <vector> 
  #include <algorithm> 
  using namespace std; 
   
  struct Job { 
      int id, deadline, profit; 
  }; 
   
  bool compare(const Job& a, const Job& b) { 
      return a.profit > b.profit; 
  } 
   
  int jobScheduling(vector<Job>& jobs) { 
      sort(jobs.begin(), jobs.end(), compare); 
   
      int maxDeadline = 0; 
      for (const auto& job : jobs) { 
          maxDeadline = max(maxDeadline, job.deadline); 
      } 
   
      vector<int> schedule(maxDeadline + 1, -1); 
      int maxProfit = 0; 
   
      for (const auto& job : jobs) { 
          for (int j = job.deadline; j > 0; --j) { 
              if (schedule[j] == -1) { 
                  schedule[j] = job.id; 
                  maxProfit += job.profit; 
                  break; 
              } 
          } 
      } 
      return maxProfit; 
  } 
   
  int main() { 
      vector<Job> jobs = {{1, 2, 100}, {2, 1, 19}, {3, 2, 27}, {4, 1, 25}, {5, 3, 15}}; 
      int maxProfit = jobScheduling(jobs); 
      cout << "Maximum profit by scheduling jobs: " << maxProfit << endl; 
   
      return 0; 
  }
  
  
  #include <iostream> //Use the Floyd-Warshall algorithm to calculate the shortest path between all pairs of ci es in a network.
  #include <vector> 
  #include <climits> 
   
  using namespace std; 
   
  void floydWarshall(vector<vector<int>>& distances) { 
      int n = distances.size(); 
      vector<vector<int>> shortestPaths = distances; 
   
      // Floyd-Warshall algorithm 
      for (int k = 0; k < n; ++k) { 
          for (int i = 0; i < n; ++i) { 
              for (int j = 0; j < n; ++j) { 
                  if (shortestPaths[i][k] != INT_MAX && shortestPaths[k][j] != INT_MAX  
                      && shortestPaths[i][j] > shortestPaths[i][k] + shortestPaths[k][j]) { 
                      shortestPaths[i][j] = shortestPaths[i][k] + shortestPaths[k][j]; 
                  } 
              } 
          } 
      } 
   
      // Print the shortest path matrix 
      cout << "Shortest path distances between each pair of ci es:\n"; 
      for (int i = 0; i < n; ++i) { 
          for (int j = 0; j < n; ++j) { 
              if (shortestPaths[i][j] == INT_MAX) 
                  cout << "INF "; 
              else 
                  cout << shortestPaths[i][j] << " "; 
          } 
          cout << endl; 
      } 
  } 
   
  int main() { 
      // Example network of ci es with distances 
      vector<vector<int>> distances = { 
          {0, 5, INT_MAX, 10}, 
          {INT_MAX, 0, 3, INT_MAX}, 
          {INT_MAX, INT_MAX, 0, 1}, 
          {INT_MAX, INT_MAX, INT_MAX, 0} 
      }; 
   
      floydWarshall(distances); 
      return 0; 
  }
  
  
  #include <iostream> //Implement the Bellman-Ford algorithm to find the shortest path from a source warehouse to all other delivery locations in a logistics network, considering possible nega ve weights for certain routes.
  #include <vector>
  #include <tuple>
  #include <climits>
  
  using namespace std;
  
  // Function to implement Bellman-Ford algorithm
  bool bellmanFord(int vertices, int edges, int source, 
                   const vector<tuple<int, int, int>>& edgeList,
                   vector<int>& distances, vector<int>& predecessors) {
      // Initialize distances and predecessors
      distances.assign(vertices, INT_MAX);
      predecessors.assign(vertices, -1);
      distances[source] = 0;
  
      // Relax edges |V| - 1 times
      for (int i = 0; i < vertices - 1; ++i) {
          for (const auto& edge : edgeList) {
              int u, v, weight;
              tie(u, v, weight) = edge;
  
              if (distances[u] != INT_MAX && distances[u] + weight < distances[v]) {
                  distances[v] = distances[u] + weight;
                  predecessors[v] = u;
              }
          }
      }
  
      // Check for negative-weight cycles
      for (const auto& edge : edgeList) {
          int u, v, weight;
          tie(u, v, weight) = edge;
  
          if (distances[u] != INT_MAX && distances[u] + weight < distances[v]) {
              cout << "Graph contains a negative-weight cycle.\n";
              return false;
          }
      }
  
      return true;
  }
  
  // Function to print the shortest paths
  void printPaths(int source, const vector<int>& distances, const vector<int>& predecessors) {
      cout << "Shortest distances from source location " << source << ":\n";
      for (size_t i = 0; i < distances.size(); ++i) {
          cout << "To location " << i << ": ";
          if (distances[i] == INT_MAX) {
              cout << "No path\n";
          } else {
              cout << distances[i] << " (Path: ";
              int current = i;
              vector<int> path;
  
              while (current != -1) {
                  path.push_back(current);
                  current = predecessors[current];
              }
  
              for (auto it = path.rbegin(); it != path.rend(); ++it) {
                  cout << *it << (next(it) == path.rend() ? ")" : " -> ");
              }
              cout << "\n";
          }
      }
  }
  
  int main() {
      int vertices, edges, source;
  
      // Input number of vertices and edges
      cout << "Enter the number of locations (vertices): ";
      cin >> vertices;
      cout << "Enter the number of routes (edges): ";
      cin >> edges;
  
      vector<tuple<int, int, int>> edgeList;
  
      // Input the edges (u, v, weight)
      cout << "Enter the routes in the format (source destination weight):\n";
      for (int i = 0; i < edges; ++i) {
          int u, v, weight;
          cin >> u >> v >> weight;
          edgeList.emplace_back(u, v, weight);
      }
  
      // Input the source vertex
      cout << "Enter the source location: ";
      cin >> source;
  
      vector<int> distances, predecessors;
  
      // Run Bellman-Ford algorithm
      if (bellmanFord(vertices, edges, source, edgeList, distances, predecessors)) {
          printPaths(source, distances, predecessors);
      }
  
      return 0;
      /*
      Enter the number of locations (vertices): 5
  Enter the number of routes (edges): 8
  Enter the routes in the format (source destination weight):
  0 1 -1
  0 2 4
  1 2 3
  1 3 2
  1 4 2
  3 2 5
  3 1 1
  4 3 -3
  Enter the source location: 0
      */
  }
  
  
  #include <iostream> //Implement the Travelling Salesman Problem (TSP) using dynamic programming to opmize the delivery route for a company, minimizing travel distance and returning to the start location.
  #include <vector> 
  #include <climits> 
   
  using namespace std; 
   
  int tsp(int pos, int visited, const vector<vector<int>>& dist, vector<vector<int>>& dp) { 
      int n = dist.size(); 
   
      // If all ci es are visited, return cost to return to star ng city 
      if (visited == (1 << n) - 1) { 
          return dist[pos][0]; 
      } 
   
      // If result is already computed, return it 
      if (dp[pos][visited] != -1) { 
          return dp[pos][visited]; 
      } 
   
      int minCost = INT_MAX; 
   
      // Try visi ng all unvisited ci es and take the minimum cost 
      for (int city = 0; city < n; ++city) { 
          if ((visited & (1 << city)) == 0) { // Check if city is not visited 
              int newCost = dist[pos][city] + tsp(city, visited | (1 << city), dist, dp); 
              minCost = min(minCost, newCost); 
          } 
      } 
   
      // Store and return the result 
      return dp[pos][visited] = minCost; 
  } 
   
  int main() { 
      // Example distance matrix for 4 ci es 
      vector<vector<int>> dist = { 
          {0, 20, 42, 35}, 
          {20, 0, 30, 34}, 
          {42, 30, 0, 12}, 
          {35, 34, 12, 0} 
      };
  
      // for input matrix
      // int n; 
      // cout << "Enter the number of cities: "; 
      // cin >> n; 
      // vector<vector<int>> dist(n, vector<int>(n)); 
      // cout << "Enter the distance matrix (use a large number like 1000000 for no path):\n"; 
      // for (int i = 0; i < n; ++i) { 
      //     for (int j = 0; j < n; ++j) { 
      //         cin >> dist[i][j]; 
      //     } 
      // }  
   
      int n = dist.size(); 
      vector<vector<int>> dp(n, vector<int>(1 << n, -1)); // DP table ini alized to -1 
   
      int minCost = tsp(0, 1, dist, dp); // Start from city 0 with only city 0 visited 
   
      cout << "Minimum travel cost to visit all ci es and return to start: " << minCost << endl; 
      return 0; 
  } 
  
  
  
  #include <iostream> //Implement the Floyd-Warshall algorithm to compute the shortest paths between all pairs of ver ces in a weighted, directed graph. Accept the graph as an adjacency matrix input, and display the final shortest path matrix, showing the minimum distances between each pair of vertices. 
  #include <vector> 
  #include <climits> 
   
  using namespace std; 
   
  void floydWarshall(vector<vector<int>>& graph) { 
      int n = graph.size(); 
      vector<vector<int>> dist = graph; 
   
      // Floyd-Warshall algorithm to compute shortest paths 
      for (int k = 0; k < n; ++k) { 
          for (int i = 0; i < n; ++i) { 
              for (int j = 0; j < n; ++j) { 
                  if (dist[i][k] != INT_MAX && dist[k][j] != INT_MAX  
                      && dist[i][j] > dist[i][k] + dist[k][j]) { 
                      dist[i][j] = dist[i][k] + dist[k][j]; 
                  } 
              } 
          } 
      } 
   
      // Display the shortest path matrix 
      cout << "Shortest path matrix:\n"; 
      for (int i = 0; i < n; ++i) { 
          for (int j = 0; j < n; ++j) { 
              if (dist[i][j] == INT_MAX) 
                  cout << "INF "; 
              else 
                  cout << dist[i][j] << " "; 
          } 
          cout << endl; 
      } 
  } 
   
  int main() { 
      // Input adjacency matrix for the graph 
      int n; 
      cout << "Enter the number of ver ces: "; 
      cin >> n; 
   
      vector<vector<int>> graph(n, vector<int>(n)); 
      cout << "Enter the adjacency matrix (use " << INT_MAX << " for infinity):\n"; 
      for (int i = 0; i < n; ++i) { 
          for (int j = 0; j < n; ++j) { 
              cin >> graph[i][j]; 
          } 
      } 
   
      floydWarshall(graph); 
      return 0; 
      /*
          Enter the number of vertices: 4
  Enter the adjacency matrix (use 2147483647 for infinity):
  0 3 2147483647 5
  2 0 2147483647 4
  2147483647 1 0 2147483647
  2147483647 2147483647 2 0
  
      */
  }
  
  
  
  #include <iostream> //Implement the Travelling Salesman Problem (TSP) using dynamic programming to find the minimum cost of visiting a set of cities exactly once and returning to the starting city. Allow the user to input the distance matrix and output the minimum travel cost and the optimal path.
  #include <vector> 
  #include <climits> 
   
  using namespace std; 
   
  int tsp(int pos, int visited, const vector<vector<int>>& dist, vector<vector<int>>& dp, 
  vector<vector<int>>& path) { 
      int n = dist.size(); 
   
      // Base case: All ci es are visited, return cost to return to star ng city 
      if (visited == (1 << n) - 1) { 
          return dist[pos][0]; 
      } 
   
      // If result is already computed, return it 
      if (dp[pos][visited] != -1) { 
          return dp[pos][visited]; 
      } 
   
      int minCost = INT_MAX; 
      int bestCity = -1; 
   
      // Try visi ng all unvisited ci es and take the minimum cost path 
      for (int city = 0; city < n; ++city) { 
          if ((visited & (1 << city)) == 0) { // Check if city is not visited 
              int newCost = dist[pos][city] + tsp(city, visited | (1 << city), dist, dp, path); 
              if (newCost < minCost) { 
                  minCost = newCost; 
                  bestCity = city; 
              } 
          } 
      } 
   
      // Store the result and update the path 
      dp[pos][visited] = minCost; 
      path[pos][visited] = bestCity; 
      return minCost; 
  } 
   
  void printPath(int start, const vector<vector<int>>& path) { 
      int n = path.size(); 
      int visited = 1; 
      int pos = start; 
   
      cout << "Optimal path: " << pos << " "; 
      while (path[pos][visited] != -1) { 
          pos = path[pos][visited]; 
          visited |= (1 << pos); 
          cout << "-> " << pos << " "; 
      } 
      cout << "-> " << start << endl; 
  } 
   
  int main() { 
      int n; 
      cout << "Enter the number of cities: "; 
      cin >> n; 
   
      vector<vector<int>> dist(n, vector<int>(n)); 
      cout << "Enter the distance matrix (use a large number like 1000000 for no path):\n"; 
      for (int i = 0; i < n; ++i) { 
          for (int j = 0; j < n; ++j) { 
              cin >> dist[i][j]; 
          } 
      } 
   
      vector<vector<int>> dp(n, vector<int>(1 << n, -1)); // DP table ini alized to -1 
      vector<vector<int>> path(n, vector<int>(1 << n, -1)); // Path table to reconstruct the route 
   
      int minCost = tsp(0, 1, dist, dp, path); // Start from city 0 with only the star ng city visited 
   
      cout << "Minimum travel cost to visit all ci es and return to start: " << minCost << endl; 
      printPath(0, path); 
   
      return 0; 
      /*
          Enter the number of cities: 4
  Enter the distance matrix (use a large number like 1000000 for no path):
  0 10 15 20
  10 0 35 25
  15 35 0 30
  20 25 30 0
  
      */
  }
  
  
  
  #include <iostream> //Given a set of projects, each with a profit and a resource requirement, determine the combination of projects that maximizes total profit without exceeding a given resource limit using 0/1 knapsack problem.
  #include <vector>
  #include <algorithm>
  
  using namespace std;
  
  // Function to solve the 0/1 Knapsack problem
  int knapsack(const vector<int>& profits, const vector<int>& resources, int resourceLimit, vector<vector<int>>& dp) {
      int n = profits.size();
  
      // Fill dp table
      for (int i = 1; i <= n; ++i) {
          for (int j = 0; j <= resourceLimit; ++j) {
              if (resources[i - 1] <= j) {
                  dp[i][j] = max(dp[i - 1][j], dp[i - 1][j - resources[i - 1]] + profits[i - 1]);
              } else {
                  dp[i][j] = dp[i - 1][j];
              }
          }
      }
  
      // Maximum profit is found at dp[n][resourceLimit]
      return dp[n][resourceLimit];
  }
  
  // Function to reconstruct the selected projects
  vector<int> getSelectedProjects(const vector<int>& profits, const vector<int>& resources, int resourceLimit, const vector<vector<int>>& dp) {
      int n = profits.size();
      vector<int> selectedProjects;
  
      int w = resourceLimit;
      for (int i = n; i > 0 && w > 0; --i) {
          if (dp[i][w] != dp[i - 1][w]) {
              selectedProjects.push_back(i - 1); // Add project index to selectedProjects
              w -= resources[i - 1];
          }
      }
  
      reverse(selectedProjects.begin(), selectedProjects.end());
      return selectedProjects;
  }
  
  int main() {
      int n, resourceLimit;
  
      cout << "Enter the number of projects: ";
      cin >> n;
  
      vector<int> profits(n), resources(n);
  
      cout << "Enter the profits of the projects: ";
      for (int i = 0; i < n; ++i) {
          cin >> profits[i];
      }
  
      cout << "Enter the resource requirements of the projects: ";
      for (int i = 0; i < n; ++i) {
          cin >> resources[i];
      }
  
      cout << "Enter the resource limit: ";
      cin >> resourceLimit;
  
      // Initialize dp table
      vector<vector<int>> dp(n + 1, vector<int>(resourceLimit + 1, 0));
  
      // Calculate the maximum profit using knapsack
      int maxProfit = knapsack(profits, resources, resourceLimit, dp);
  
      // Get the selected projects
      vector<int> selectedProjects = getSelectedProjects(profits, resources, resourceLimit, dp);
  
      cout << "Maximum profit: " << maxProfit << endl;
      cout << "Selected projects: ";
      for (int project : selectedProjects) {
          cout << project + 1 << " "; // Print project indices (1-based)
      }
      cout << endl;
  
      return 0; 
      /*
      Enter the number of projects: 4
  Enter the profits of the projects: 60 100 120 80
  Enter the resource requirements of the projects: 10 20 30 25
  Enter the resource limit: 50
  
      */
  } 
  
  #include <iostream>  //Write a program to solve the Eight Queens problem using backtracking. The program should place eight queens on an 8x8 chessboard such that no two queens threaten each other. Display one of the possible solutions with the placement of queens.
  #include <vector> 
   
  using namespace std; 
   
  // Size of the chessboard 
  const int N = 8; 
   
  // Func on to print the chessboard with queens placed 
  void printSolution(const vector<vector<int>>& board) { 
      for (int i = 0; i < N; ++i) { 
          for (int j = 0; j < N; ++j) { 
              if (board[i][j] == 1) 
                  cout << "Q "; 
              else 
                  cout << ". "; 
          } 
          cout << endl; 
      } 
      cout << endl; 
  } 
   
  // Check if a queen can be placed at board[row][col] 
  bool isSafe(const vector<vector<int>>& board, int row, int col) { 
      // Check this row on le side 
      for (int i = 0; i < col; ++i) 
          if (board[row][i] == 1) 
              return false; 
   
      // Check upper diagonal on le side 
      for (int i = row, j = col; i >= 0 && j >= 0; --i, --j) 
          if (board[i][j] == 1) 
              return false; 
   
      // Check lower diagonal on le side 
      for (int i = row, j = col; j >= 0 && i < N; ++i, --j) 
          if (board[i][j] == 1) 
              return false; 
   
      return true; 
  } 
   
  // Func on to solve the N-Queens problem using backtracking 
  bool solveNQueens(vector<vector<int>>& board, int col) { 
      // Base case: All queens are placed 
      if (col >= N) 
          return true; 
   
      // Consider this column and try placing this queen in all rows one by one 
      for (int i = 0; i < N; ++i) { 
          if (isSafe(board, i, col)) { 
              board[i][col] = 1; // Place the queen 
   
              // Recursively place the rest of the queens 
              if (solveNQueens(board, col + 1)) 
                  return true; 
   
              // If placing queen in board[i][col] doesn't lead to a solu on, 
              // then remove queen from board[i][col] (backtrack) 
              board[i][col] = 0; 
          } 
      } 
      return false; // If the queen cannot be placed in any row in this column 
  } 
   
  int main() { 
      vector<vector<int>> board(N, vector<int>(N, 0)); // Initialize board with 0s 
   
      if (solveNQueens(board, 0)) { 
          cout << "One of the solutions to the Eight Queens problem:\n"; 
          printSolution(board); 
      } else { 
          cout << "No solution exists for the Eight Queens problem.\n"; 
      } 
   
      return 0; 
  } 
  
  
  #include <iostream> //Implement a program to solve a 9x9 Sudoku puzzle using backtracking. Accept a partially filled board as input and display the completed board if a solution exists.
  #include <vector> 
   
  using namespace std; 
   
  #define N 9 
   
  // Function to print the Sudoku board 
  void printBoard(const vector<vector<int>>& board) { 
      for (int row = 0; row < N; ++row) { 
          for (int col = 0; col < N; ++col) { 
              cout << board[row][col] << " "; 
          } 
          cout << endl; 
      } 
  } 
   
  // Func on to check if placing num in board[row][col] is valid 
  bool isSafe(const vector<vector<int>>& board, int row, int col, int num) { 
      // Check the row 
      for (int x = 0; x < N; ++x) { 
          if (board[row][x] == num) { 
              return false; 
          } 
      } 
   
      // Check the column 
      for (int x = 0; x < N; ++x) { 
          if (board[x][col] == num) { 
              return false; 
          } 
      } 
   
      // Check the 3x3 sub-grid 
      int startRow = row - row % 3; 
      int startCol = col - col % 3; 
      for (int i = 0; i < 3; ++i) { 
          for (int j = 0; j < 3; ++j) { 
              if (board[i + startRow][j + startCol] == num) { 
                  return false; 
              } 
          } 
      } 
   
      return true; 
  } 
   
  // Recursive func on to solve the Sudoku board using backtracking 
  bool solveSudoku(vector<vector<int>>& board) { 
      int row = -1; 
      int col = -1; 
      bool isEmpty = false; 
   
      // Find an empty cell 
      for (int i = 0; i < N; ++i) { 
          for (int j = 0; j < N; ++j) { 
              if (board[i][j] == 0) { 
                  row = i; 
                  col = j; 
                  isEmpty = true; 
                  break; 
              } 
          } 
          if (isEmpty) break; 
      } 
   
      // No empty cell le , board is solved 
      if (!isEmpty) return true; 
   
      // Try placing digits 1 to 9 in the empty cell 
      for (int num = 1; num <= 9; ++num) { 
          if (isSafe(board, row, col, num)) { 
              board[row][col] = num; // Place num 
   
              if (solveSudoku(board)) { 
                  return true; 
              } 
   
              board[row][col] = 0; // Backtrack 
          } 
      } 
   
      return false; // Trigger backtracking 
  } 
   
  int main() { 
      vector<vector<int>> board(N, vector<int>(N)); 
   
      cout << "Enter the Sudoku puzzle (enter 0 for empty cells):\n"; 
      for (int i = 0; i < N; ++i) { 
          for (int j = 0; j < N; ++j) { 
              cin >> board[i][j]; 
          } 
      } 
   
      if (solveSudoku(board)) { 
          cout << "Solved Sudoku puzzle:\n"; 
          printBoard(board); 
      } else { 
          cout << "No solution exists.\n"; 
      } 
   
      return 0;  
      /*5 3 0 0 7 0 0 0 0
        6 0 0 1 9 5 0 0 0
        0 9 8 0 0 0 0 6 0
        8 0 0 0 6 0 0 0 3
        4 0 0 8 0 3 0 0 1
        7 0 0 0 2 0 0 0 6
        0 6 0 0 0 0 2 8 0
        0 0 0 4 1 9 0 0 5
        0 0 0 0 8 0 0 7 9
        */
  } 
  
  
  #include <iostream> //Implement the Travelling Salesman Problem (TSP) using backtracking to find the minimum-cost path that visits each city exactly once and returns to the starting city. Accept a distance matrix as input and display the minimum path and cost. 
  #include <vector>
  #include <climits>
  
  using namespace std;
  
  // Function to find the minimum-cost path using backtracking
  void tspBacktracking(vector<vector<int>>& dist, vector<bool>& visited, vector<int>& currentPath, vector<int>& bestPath, int& minCost, int currentCost, int level, int currentCity, int n) {
      if (level == n) {
          // Add the cost of returning to the starting city
          int totalCost = currentCost + dist[currentCity][0];
          if (totalCost < minCost) {
              minCost = totalCost;
              bestPath = currentPath;
          }
          return;
      }
  
      // Explore all cities not yet visited
      for (int i = 0; i < n; i++) {
          if (!visited[i] && dist[currentCity][i] != 0) {
              visited[i] = true;
              currentPath[level] = i;
              tspBacktracking(dist, visited, currentPath, bestPath, minCost, currentCost + dist[currentCity][i], level + 1, i, n);
              visited[i] = false;
          }
      }
  }
  
  void solveTSP(vector<vector<int>>& dist, int n) {
      vector<bool> visited(n, false);
      vector<int> currentPath(n), bestPath(n);
      int minCost = INT_MAX;
  
      visited[0] = true; // Start from the first city (0)
      currentPath[0] = 0;
  
      // Perform backtracking to find the optimal path
      tspBacktracking(dist, visited, currentPath, bestPath, minCost, 0, 1, 0, n);
  
      // Output the results
      cout << "Minimum Cost: " << minCost << endl;
      cout << "Optimal Path: ";
      for (int i = 0; i < n; i++) {
          cout << bestPath[i] << " ";
      }
      cout << "0" << endl; // Return to the starting city
  }
  
  int main() {
      int n;
  
      cout << "Enter the number of cities: ";
      cin >> n;
  
      vector<vector<int>> dist(n, vector<int>(n));
  
      cout << "Enter the distance matrix:" << endl;
      for (int i = 0; i < n; i++) {
          for (int j = 0; j < n; j++) {
              cin >> dist[i][j];
          }
      }
  
      solveTSP(dist, n);
  
      return 0;
  }
  
  
  
  #include <iostream> //Write a program to solve the Travelling Salesman Problem (TSP) using Branch and Bound to find the minimum-cost tour. Accept a distance matrix as input, and display the minimum cost and the path of the tour.
  #include <climits>
  #include <vector>
  #include <algorithm>
  #include <functional>
  
  using namespace std;
  
  // Function to calculate the lower bound for a node
  int calculateLowerBound(vector<vector<int>>& dist, vector<int>& path, int n, int currentNode) {
      int lowerBound = 0;
  
      // Calculate the sum of distances for the current path
      for (size_t i = 0; i < path.size() - 1; i++) {
          lowerBound += dist[path[i]][path[i + 1]];
      }
  
      // Add the distance from the current node to the nearest unvisited node
      int minEdge = INT_MAX;
      for (int i = 0; i < n; i++) {
          if (find(path.begin(), path.end(), i) == path.end() && dist[currentNode][i] != 0) {
              minEdge = min(minEdge, dist[currentNode][i]);
          }
      }
      lowerBound += (minEdge == INT_MAX) ? 0 : minEdge;
  
      return lowerBound;
  }
  
  // Branch and Bound to solve TSP
  void branchAndBound(vector<vector<int>>& dist, int n) {
      vector<int> path(1, 0); // Start with the first city (0)
      vector<bool> visited(n, false);
      visited[0] = true;
      int minCost = INT_MAX;
      vector<int> bestPath;
  
      function<void(int, int)> dfs = [&](int currentNode, int count) {
          if (count == n) {
              // Add the cost of returning to the starting point
              int cost = 0;
              for (size_t i = 0; i < path.size() - 1; i++) {
                  cost += dist[path[i]][path[i + 1]];
              }
              cost += dist[path.back()][path[0]];
  
              // Check if we found a better path
              if (cost < minCost) {
                  minCost = cost;
                  bestPath = path;
              }
              return;
          }
  
          // Try each node and branch
          for (int i = 0; i < n; i++) {
              if (!visited[i] && dist[currentNode][i] != 0) {
                  visited[i] = true;
                  path.push_back(i);
  
                  // Lower bound calculation to prune the branch
                  int lowerBound = calculateLowerBound(dist, path, n, i);
  
                  if (lowerBound < minCost) {
                      dfs(i, count + 1);
                  }
  
                  path.pop_back();
                  visited[i] = false;
              }
          }
      };
  
      dfs(0, 1);
  
      // Output the result
      cout << "Minimum Cost: " << minCost << endl;
      cout << "Optimal Path: ";
      for (int i : bestPath) {
          cout << i << " ";
      }
      cout << bestPath[0] << endl; // Return to the starting point
  }
  
  int main() {
      int n;
  
      cout << "Enter the number of cities: ";
      cin >> n;
  
      vector<vector<int>> dist(n, vector<int>(n));
  
      cout << "Enter the distance matrix:" << endl;
      for (int i = 0; i < n; i++) {
          for (int j = 0; j < n; j++) {
              cin >> dist[i][j];
          }
      }
  
      branchAndBound(dist, n);
  
      return 0; // if no of city is 2 then matrix become 20 40
                  //                                     10 30 simply in n.n form
  } 
  
  
  
  
  
  #include <iostream>  //Solve the 0-1 knapsack problem using branch and bound to maximize the profit without exceeding the weight limit.
  #include <vector> 
  #include <algorithm> 
  #include <climits> 
  using namespace std; 
  // Structure to store an item 
  struct Item { 
  int weight; 
  int profit; 
  }; 
  // Structure to store a node in the Branch and Bound tree 
  struct Node { 
  int level;   // Level of the node (index of the item considered) 
  int profit;  // Profit accumulated so far 
  int weight;  // Weight accumulated so far 
  float bound; // Upper bound of the profit 
  }; 
  // Func on to calculate the upper bound of profit for the current node 
  float calculateBound(Node u, int n, int W, vector<Item>& items) { 
      if (u.weight >= W) return 0;  // If the weight exceeds capacity, return 0 
   
      // Ini alize bound with the profit accumulated so far 
      float bound = u.profit; 
   
      // Start including items in the bound calcula on un l we exceed capacity 
      int j = u.level + 1; 
      int totalWeight = u.weight; 
   
      while (j < n && totalWeight + items[j].weight <= W) { 
          totalWeight += items[j].weight; 
          bound += items[j].profit; 
          j++; 
      }
// If there's s ll room, take a frac on of the next item (frac onal knapsack) 
    if (j < n) { 
        bound += (W - totalWeight) * items[j].profit / float(items[j].weight); 
    } 
 
    return bound; 
} 
 
// Func on to solve 0/1 Knapsack Problem using Branch and Bound 
void knapsackBranchAndBound(int n, int W, vector<Item>& items) { 
    // Sort the items based on profit/weight ra o 
    sort(items.begin(), items.end(), [](Item a, Item b) { 
        return (float(a.profit) / a.weight) > (float(b.profit) / b.weight); 
    }); 
 
    // Priority queue or deque to store nodes (nodes with higher bound should be processed first) 
    vector<Node> queue; 
    Node u, v; 
    u.level = -1; 
    u.profit = 0; 
    u.weight = 0; 
    u.bound = 0.0; 
 
    // Compute the bound of the root node 
    u.bound = calculateBound(u, n, W, items); 
    queue.push_back(u); 
 
    int maxProfit = 0;  // To store the maximum profit found 
    vector<int> solution(n, 0);  // To store the opmal solu on 
 
    while (!queue.empty()) { 
        u = queue.back(); 
        queue.pop_back(); 
 
        // If the bound is greater than the maxProfit found, process the node 
        if (u.bound > maxProfit) { 
            // Consider the next item (include it) 
            v.level = u.level + 1; 
            v.weight = u.weight + items[v.level].weight; 
            v.profit = u.profit + items[v.level].profit; 
 
            if (v.weight <= W && v.profit > maxProfit) { 
                maxProfit = v.profit; 
                solution[v.level] = 1; 
            } 
 
            // Compute the bound for this new node 
            v.bound = calculateBound(v, n, W, items); 
            if (v.bound > maxProfit) { 
                queue.push_back(v); 
            } 
 
            // Consider the next item (exclude it) 
            v.weight = u.weight; 
            v.profit = u.profit; 
            v.bound = calculateBound(v, n, W, items); 
            if (v.bound > maxProfit) { 
                queue.push_back(v); 
            } 
        } 
    } 
 
    // Display the results 
    cout << "Maximum profit: " << maxProfit << endl; 
    cout << "Items selected: "; 
    for (int i = 0; i < n; i++) { 
        if (solution[i]) { 
            cout << i << " "; 
        } 
    } 
    cout << endl; 
} 
 
int main() { 
    // Example input 
    int n = 4; // Number of items 
    int W = 50; // Maximum weight capacity 
 
    vector<Item> items = {{10, 60}, {20, 100}, {30, 120}, {40, 80}}; // {weight, profit} 
 
    cout << "Solving 0/1 Knapsack Problem using Branch and Bound...\n"; 
    knapsackBranchAndBound(n, W, items); 
 
    return 0; 
} 



#include <iostream> //Solve a maze where a rat has to reach the destination from the starting point using backtracking. Print all possible paths if multiple solutions exist. 
#include <vector> 
 
using namespace std; 
 
#define N 4  // Size of the maze (4x4 in this case) 
 
// Func on to print the path 
void printSolution(vector<vector<int>>& solution) { 
    for (int i = 0; i < N; i++) { 
        for (int j = 0; j < N; j++) { 
            cout << solution[i][j] << " "; 
        } 
        cout << endl; 
    } 
} 
 
// Func on to check if a posi on is safe to move (within bounds and not an obstacle) 
bool isSafe(int x, int y, vector<vector<int>>& maze, vector<vector<int>>& solution) { 
    // Check if (x, y) is inside the maze and not a blocked cell (0) 
    return (x >= 0 && x < N && y >= 0 && y < N && maze[x][y] == 1 && solution[x][y] == 0); 
} 
 
// Recursive func on to solve the maze using backtracking 
bool solveMazeUtil(int x, int y, vector<vector<int>>& maze, vector<vector<int>>& solution) { 
    // If the des na on is reached, mark the current posi on and return true 
    if (x == N - 1 && y == N - 1) { 
        solution[x][y] = 1; 
        return true; 
    } 
 
    // Check if maze[x][y] is a valid move 
    if (isSafe(x, y, maze, solution)) { 
        // Mark the current cell as part of the solu on path 
        solution[x][y] = 1; 
 
        // Move forward in the x direc on (downwards) 
        if (solveMazeUtil(x + 1, y, maze, solution)) { 
            return true; 
        } 
 
        // Move downwards in the y direc on (rightwards) 
        if (solveMazeUtil(x, y + 1, maze, solution)) { 
            return true; 
        } 
 
        // If moving in either direc on doesn't work, backtrack 
        solution[x][y] = 0; 
        return false; 
    } 
 
    return false; 
} 
 
// Func on to solve the maze 
bool solveMaze(vector<vector<int>>& maze) { 
    vector<vector<int>> solution(N, vector<int>(N, 0)); 
 
    // Start solving the maze from the top-le corner (0, 0) 
    if (solveMazeUtil(0, 0, maze, solution)) { 
        printSolution(solution); 
        return true; 
    } 
 
    cout << "No solu on exists" << endl; 
    return false; 
} 
 
int main() { 
    // Example maze (1 - open cell, 0 - blocked cell) 
    vector<vector<int>> maze = { 
        {1, 0, 0, 0}, 
        {1, 1, 0, 1}, 
        {0, 1, 0, 0}, 
        {1, 1, 1, 1} 
    }; 
 
    cout << "Solving maze using backtracking..." << endl; 
    if (!solveMaze(maze)) { 
        cout << "No path exists from the start to the des na on." << endl; 
} 
return 0; 
} `,
  },
];

export default function Component() {
  const sortedCodeExamples = codeExamples.sort((a, b) => {
    const firstLetterA = a.title.trim().charAt(0).toUpperCase();
    const firstLetterB = b.title.trim().charAt(0).toUpperCase();
    return firstLetterA.localeCompare(firstLetterB);
  });
  console.log(sortedCodeExamples);
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null);

  const copyToClipboard = useCallback((code: string, index: number) => {
    const copyText = (text: string) => {
      const textArea = document.createElement("textarea");
      textArea.value = text;

      textArea.style.position = "fixed";
      textArea.style.top = "0";
      textArea.style.left = "0";
      textArea.style.width = "2em";
      textArea.style.height = "2em";
      textArea.style.padding = "0";
      textArea.style.border = "none";
      textArea.style.outline = "none";
      textArea.style.boxShadow = "none";
      textArea.style.background = "transparent";

      document.body.appendChild(textArea);
      textArea.focus();
      textArea.select();

      try {
        const successful = document.execCommand("copy");
        if (successful) {
          setCopiedIndex(index);
          setTimeout(() => setCopiedIndex(null), 2000);
        } else {
          console.error("Failed to copy text");
        }
      } catch (err) {
        console.error("Failed to copy text: ", err);
      }

      document.body.removeChild(textArea);
    };

    if (navigator.clipboard && window.isSecureContext) {
      // Use the Clipboard API if available and in a secure context
      navigator.clipboard
        .writeText(code)
        .then(() => {
          setCopiedIndex(index);
          setTimeout(() => setCopiedIndex(null), 2000);
        })
        .catch((err) => {
          console.error("Failed to copy text: ", err);
        });
    } else {
      // Fallback to the older method for non-secure contexts
      copyText(code);
    }
  }, []);

  return (
    <div className="container mx-auto p-4 dark">
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {sortedCodeExamples.map((example, index) => (
          <Card
            key={index}
            className="overflow-hidden bg-gray-800 border-gray-700"
          >
            <CardHeader className="bg-gray-900">
              <CardTitle className="font-light m-2 text-gray-100">
                {example.title}
              </CardTitle>
              <Button className="bg-gray-700 hover:bg-gray-600 text-white rounded-lg w-3/12">
                {example.description}
              </Button>
            </CardHeader>
            <CardContent className="p-4">
              <div className="relative bg-gray-900">
                <pre className="bg-gray-800 p-4 rounded-md overflow-x-auto text-sm text-gray-300">
                  <code>{example.code.slice(0, 100)}</code>
                </pre>
                <Button
                  className="absolute top-2 right-2 bg-gray-700 hover:bg-gray-600"
                  size="sm"
                  variant="secondary"
                  onClick={() => copyToClipboard(example.code, index)}
                >
                  <span className="sr-only">
                    {copiedIndex === index ? "Copied" : "Copy code"}
                  </span>
                  {copiedIndex === index ? (
                    <CheckCircle
                      className="h-4 w-4 text-green-400"
                      aria-hidden="true"
                    />
                  ) : (
                    <Clipboard
                      className="h-4 w-4 text-gray-300"
                      aria-hidden="true"
                    />
                  )}
                </Button>
              </div>
              <Button
                className="mt-4 w-full bg-gray-700 hover:bg-gray-600 text-white"
                onClick={() => copyToClipboard(example.code, index)}
              >
                <Code2 className="mr-2 h-4 w-4" aria-hidden="true" />
                <span>{copiedIndex === index ? "Copied!" : "Copy Code"}</span>
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
