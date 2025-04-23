export const codeExamples = [
  {
    title: "1.Shell Programming  ",
    description: "2",
    code: `
        #!/bin/bash 
    echo "OSL PRACTICAL 1" 
    echo "Library Database" 
    echo "Enter file name" 
    read f1 
    ch=0 
    while [ $ch -ne 7 ] 
    do 
    echo "MENU OF THE LIBRARY Database" 
    echo "1. Add Record" 
    echo "2. Display Record"  
    echo "3. Search Record" 
    echo "4. Delete Record" 
    echo "5. Modify Record" 
    echo "6. Exit" 
    echo "Enter your choice" 
    read ch 
    case $ch in 
    1) echo "Enter Book no" 
    read rno 
    echo "Enter name" 
    read name 
    echo "Enter author name"
     read add 
       echo "$rno" "$name"  "$add" >> $f1 
       ;; 
        
    2) echo "Entered record is as follows" 
       cat $f1 
       ;;  
      
    3) echo "Enter Book no of record to be searched" 
       read rn1 
       if grep -e "$rn1" "$f1"  
       then  
       echo "Record found" 
       else  
       echo "Record not found" 
       fi 
       ;; 
        
    4)echo "Enter Book no of the record to be deleted" 
      read rn1 
      grep -v "$rn1" "$f1" | cat > nf1 
      echo "Library Database after record deletion is " 
      cp nf1 $f1 
      cat $f1 
      ;;
      5) echo "Enter Book no of record to be modified" 
       read rn1 
       if grep -v "$rn1" "$f1"| cat > nf1 
     then   
       cp nf1 $f1 
       echo "Enter new Book no" 
       read nrno 
       echo "Enter new book name" 
       read nname 
       echo "Enter new author name" 
       read nadd 
       echo "$nrno" "$nname" "$nadd"   >> $f1 
       else 
       echo "Record not found" 
       fi 
       ;; 
        
    6) exit 
       ;; 
        
    *) echo "Invalid choice" 
    esac 
    done
    
    // ubuntu ls -> nano library.sh -> cat library.sh -> chmod +x library.sh -> ./library.sh 
        `,
  },

  {
    title: " 2. UNIX Process Control- I   ",
    description: "#3A-zombie-sar",
    code: `
        // error print madhe
        #include<stdio.h>
    #include<unistd.h>
    #include<sys/types.h>
    #include<sys/wait.h>  // Added header for wait()
    #define MAX 20
    
    void quicksort(int a[], int, int);
    // prototype of Quick sort
    void merge(int a[], int low, int mid, int high);
    void divide(int a[], int low, int high);
    
    int main()
    {
        pid_t pid; // Declaration of pid which will store process ID
        int a[MAX], n;
        int i;
        int status; // Declare a variable to store the child's exit status
    
        // Accepting Elements of an array
        printf("\n\tEnter the number of elements: ");
        scanf("%d", &n);
        printf("\n\tEnter the elements: \n");
        for (i = 0; i < n; i++) {
            printf("\t");
            scanf("%d", &a[i]);
        }
    
        /* =====Performing fork() system call==== */
        pid = fork();
    
        if (pid < 0)  // If Process not created successfully
        {
            printf("Error While creating a new process.....!!!!!!");
        }
        else if (pid == 0)  // For Child process
        {
            printf("\n\t==============Child process started=============");
            printf("\n\tI am a child process with pid=%d and ppid=%d", getpid(), getppid());
    
            quicksort(a, 0, n - 1);  // Performing quick sort in child process
    
            printf("\n\n\tSorted array by quick sort:\n\t");
            for (i = 0; i < n; i++)
                printf("%d\t", a[i]);
            printf("\n");
    
            printf("\n\t==============Child process terminated=============\n");
        }
        else   // For Parent process
        {
            wait(&status);  // Wait for the child process to terminate and pass the exit status
            printf("\n\t==============Parent process started=============");
            printf("\n\n\tI am a parent process with pid=%d\n", getpid());
    
            divide(a, 0, n - 1);  // Performing merge sort in parent process
    
            printf("\n\n\tSorted array by merge sort:\n\t");
            for (i = 0; i < n; i++)
                printf("%d\t", a[i]);
            printf("\n");
    
            printf("\n\t==============Parent process terminated=============\n");
    
            execl("/bin/ps", "ps", NULL);  // Only in parent process
        }
    
        return 0;
    }
    
    /* ==== Definition of Quick Sort ===*/
    void quicksort(int a[MAX], int first, int last)
    {
        int pivot, j, i, temp;
        if (first < last) {
            i = first;
            j = last;
            pivot = first;
            while (i < j) {
                while (a[i] <= a[pivot] && i < last)
                    i++;
                while (a[j] > a[pivot])
                    j--;
                if (i < j) {
                    temp = a[i];
                    a[i] = a[j];
                    a[j] = temp;
                }
            }
            temp = a[j];
            a[j] = a[pivot];
            a[pivot] = temp;
    
            quicksort(a, first, j - 1);
            quicksort(a, j + 1, last);
        }
    }
    
    /* ==== Definition of Merge Sort ===*/
    void divide(int a[MAX], int low, int high)
    {
        if (low < high) {  // The array has at least 2 elements
            int mid = (low + high) / 2;
            divide(a, low, mid);  // Recursion chain to sort first half of the array
            divide(a, mid + 1, high);  // Recursion chain to sort second half of the array
            merge(a, low, mid, high);
        }
    }
    
    void merge(int a[MAX], int low, int mid, int high)
    {
        int i, j, k, m = mid - low + 1, n = high - mid;                                                                                                                                                         int first_half[m], second_half[n];
    
        for (i = 0; i < m; i++)  // Extract first half (already sorted)
            first_half[i] = a[low + i];
    
        for (i = 0; i < n; i++)  // Extract second half (already sorted)
            second_half[i] = a[mid + i + 1];
    
        i = j = 0;
        k = low;
    
        while (i < m || j < n) {  // Merge the two halves
            if (i >= m) {
                a[k++] = second_half[j++];
                continue;
            }
            if (j >= n) {
                a[k++] = first_half[i++];
                continue;
            }
            if (first_half[i] < second_half[j])
                a[k++] = first_half[i++];
            else
                a[k++] = second_half[j++];
        }
    }    `,
  },

  {
    title: " 3. UNIX Process Control- I   ",
    description: "#3A-orphan-sar",
    code: `
        // error print
        #include<stdio.h>
    #include<unistd.h>
    #include<sys/types.h>
    #include<sys/wait.h>  // For wait()
    #define MAX 20
    
    void quicksort(int a[], int, int);
    void merge(int a[], int low, int mid, int high);
    void divide(int a[], int low, int high);
    
    int main(){
        pid_t pid;
        int a[MAX], n, i;
    
        printf("\n\tEnter the no. of elements: ");
        scanf("%d", &n);
    
        printf("\n\tEnter the elements: \n");
        for(i = 0; i < n; i++){
            printf("\t");
            scanf("%d", &a[i]);
        }
    
        pid = fork();
    
        if(pid < 0) {
            printf("Error While creating a new process.....!!!!!!");
        } else if(pid == 0) {
            wait(NULL);  // For Orphan process
            printf("\n\t==============Child process started=============");
            printf("\n\tI am a child process with pid=%d and ppid=%d", getpid(), getppid());
            quicksort(a, 0, n - 1);
            printf("\n\n\tSorted array by quick sort:\n\t");
            for(i = 0; i < n; i++)
                printf("%d\t", a[i]);
            printf("\n");
            printf("\n\t==============Child process terminated=============\n");                                                                                    } else {
            printf("\n\t==============Parent process started=============");
            printf("\n\n\tI am a parent process with pid=%d ", getpid());
            divide(a, 0, n - 1);
            printf("\n\n\tSorted array by merge sort:\n\t");
            for(i = 0; i < n; i++)
                printf("%d\t", a[i]);
            printf("\n");
            printf("\n\t==============Parent process terminated=============\n");
        }
    
        execl("/bin/ps", "ps", NULL);
        return 0;
    }
    
    void quicksort(int a[MAX], int first, int last){
        int pivot, j, i, temp;
        if(first < last) {
            i = first;
            j = last;
            pivot = first;
            while(i < j){
                while(a[i] <= a[pivot] && i < last) i++;
                while(a[j] > a[pivot]) j--;
                if(i < j){
                    temp = a[i];
                    a[i] = a[j];
                    a[j] = temp;
                }
            }
            temp = a[j];
            a[j] = a[pivot];
            a[pivot] = temp;
    
            quicksort(a, first, j - 1);
            quicksort(a, j + 1, last);
        }                                                                                                                                                                                                                          }
    
    void divide(int a[MAX], int low, int high){
        if(low < high) {
            int mid = (low + high) / 2;
            divide(a, low, mid);
            divide(a, mid + 1, high);
            merge(a, low, mid, high);
        }
    }
    
    void merge(int a[MAX], int low, int mid, int high){
        int i, j, k, m = mid - low + 1, n = high - mid;
        int first_half[m], second_half[n];
    
        for(i = 0; i < m; i++)
            first_half[i] = a[low + i];
        for(i = 0; i < n; i++)
            second_half[i] = a[mid + i + 1];
    
        i = j = 0;
        k = low;
    
        while(i < m || j < n) {
            if(i >= m) {
                a[k++] = second_half[j++];
                continue;
            }
            if(j >= n) {
                a[k++] = first_half[i++];
                continue;
            }
            if(first_half[i] < second_half[j])
                a[k++] = first_half[i++];
            else
                a[k++] = second_half[j++];
        }       
                }
        `,
  },

  {
    title: " 4. UNIX Process Control- II   ",
    description: "#3B-Parent-sar",
    code: `
    //error print , \n\t 
        #include <stdio.h>
#include <stdlib.h>
#include <string.h>
#include <unistd.h>
#define MAX 20

void quicksort(int a[MAX], int, int);

int main() {
    int a[MAX], n, i;
    char str[10];
    char *str1[MAX + 2]; // +2 to store program name + NULL
    pid_t pid;

    printf("\n\tEnter the number of elements : ");
    scanf("%d", &n);

    printf("\n\tEnter the %d Elements : \n", n);
    for (i = 0; i < n; i++) {
        printf("\t");
        scanf("%d", &a[i]);
    }

    pid = fork();

    if (pid < 0) {
        printf("Error while creating new process...!!!!");
        return 1;
    } else if (pid > 0) {
        quicksort(a, 0, n - 1);

        str1[0] = "./childbs"; // execve needs program name as argv[0]

        for (i = 0; i < n; i++) {
            sprintf(str, "%d", a[i]);
            str1[i + 1] = strdup(str); // str1[1] to str1[n] hold elements
        }

        str1[n + 1] = NULL; // Null-terminate the argument list

        execve("./childbs", str1, NULL);

        // Code after execve won't run if successful, but good to free if fails
        for (i = 1; i <= n; i++) {
            free(str1[i]);
        }
    }

    return 0;
}

void quicksort(int a[MAX], int f, int l) {
    int i, j, pivot, temp;
    if (f < l) {
        i = pivot = f;
        j = l;
        while (i < j) {
            while (a[i] <= a[pivot] && i < l) i++;
            while (a[j] > a[pivot]) j--;
            if (i < j) {
                temp = a[j];
                a[j] = a[i];
                a[i] = temp;
            }
        }
        temp = a[j];
        a[j] = a[pivot];
        a[pivot] = temp;

        quicksort(a, f, j - 1);
        quicksort(a, j + 1, l);
    }
}
    `,
  },

  {
    title: " 5. UNIX Process Control- II   ",
    description: "#3B-Child-sar",
    code: `#include <stdio.h>
#include <stdlib.h>
//error print , \n\t 

int binarySearch(int arr[], int size, int key) {
    int low = 0, high = size - 1, mid;

    while (low <= high) {
        mid = (low + high) / 2;

        if (arr[mid] == key)
            return mid;
        else if (arr[mid] < key)
            low = mid + 1;
        else
            high = mid - 1;
    }

    return -1;
}

int main(int argc, char *argv[]) {
    if (argc < 2) {
        printf("No data received from parent process.\n");
        return 1;
    }

    int size = argc - 1;
    int arr[size];

    // Convert argv[1] to argv[argc-1] to integers
    for (int i = 1; i < argc; i++) {
        arr[i - 1] = atoi(argv[i]);
    }

    printf("\nChild process received sorted array:\n");
    for (int i = 0; i < size; i++) {
        printf("%d ", arr[i]);
    }
    printf("\n");

    int key;
    printf("\nEnter the element to search using Binary Search: ");
    scanf("%d", &key);

    int result = binarySearch(arr, size, key);

    if (result != -1)
        printf("Element %d found at index %d (0-based indexing).\n", key, result);
    else
        printf("Element %d not found in the array.\n", key);

    return 0;
}
 `,
  },

  {
    title: "  6.Producer-Consumer Problem (Using semaphores)   ",
    description: "4",
    code: `import java.util.LinkedList; 
import java.util.Queue; 
 
public class Prod_Consumer { 
    private static final int BUFFER_SIZE = 5; 
    private static final Queue<Integer> buffer = new LinkedList<>(); 
    private static final Object lock = new Object(); 
 
    public static void main(String[] args) { 
        Thread producer = new Thread(() -> { 
            while (true) { 
                try { 
                    int item = (int) (Math.random() * 100); 
                    synchronized (lock) { 
                        while (buffer.size() == BUFFER_SIZE) { 
                            lock.wait(); // Wait if buffer is full 
                        } 
                        buffer.add(item); 
                        System.out.println("🥤 Producer produced: " + item + " | Buffer size: " + 
buffer.size()); 
                        lock.notify(); // Notify consumer to wake up the consumer if its waiting
                    } 
                    Thread.sleep(1000); // Simulate production time 
                } catch (InterruptedException e) { 
                    e.printStackTrace(); 
                } 
            } 
        }); 
 
        Thread consumer = new Thread(() -> { 
            while (true) { 
                try { 
                    synchronized (lock) { 
                        while (buffer.isEmpty()) { 
                            lock.wait(); // Wait if buffer is empty 
                        } 
                        int item = buffer.poll(); 
                        System.out.println("🍔 Consumer consumed: " + item + " | Buffer size: " + 
buffer.size()); 
                        lock.notify(); // Notify producer 
                    } 
                    Thread.sleep(1000); // Simulate consumption time 
                } catch (InterruptedException e) { 
                    e.printStackTrace(); 
                } 
            } 
        }); 
 
        producer.start(); 
        consumer.start();
    }
}`,
  },
  {
    title:
      " 7.Demonstration of Reader-Writer with Reader priority (Using Thread synchronization and mutual exclusion) ",
    description: "5",
    code: `import java.util.Scanner; 
import java.util.concurrent.locks.ReentrantReadWriteLock; 
 
public class ReaderWriter { 
 
    private static final ReentrantReadWriteLock rwLock = new ReentrantReadWriteLock(); // 
    private static final Object printLock = new Object(); // just for clean console output 
 
    static class Reader extends Thread { 
        private final int id; 
 
        Reader(int id) { 
            this.id = id; 
        }
        @Override 
        public void run() { 
            while (true) { 
                rwLock.readLock().lock(); // reader enters 
                try { 
                    synchronized (printLock) { 
                        System.out.println(" Reader " + id + " is reading."); 
                    } 
                } finally { 
                    rwLock.readLock().unlock(); // reader exits 
                } 
 
                try { 
                    Thread.sleep(1000); // simulate read time 
                } catch (InterruptedException e) { 
                    e.printStackTrace(); 
                } 
            } 
        } 
    } 
 
    static class Writer extends Thread { 
        private final int id; 
 
        Writer(int id) { 
            this.id = id; 
        } 
 
        @Override 
        public void run() { 
          while (true) { 
              rwLock.writeLock().lock(); // writer enters 
              try { 
                  synchronized (printLock) { 
                      System.out.println(" Writer " + id + " is writing."); 
                  } 
              } finally { 
                  rwLock.writeLock().unlock(); // writer exits 
              } 

              try { 
                  Thread.sleep(2000); // simulate write time 
              } catch (InterruptedException e) { 
                  e.printStackTrace(); 
              } 
          } 
      } 
  } 

  public static void main(String[] args) { 
      Scanner scanner = new Scanner(System.in); 

      System.out.print("Enter number of readers: "); 
      int numReaders = scanner.nextInt(); 

      System.out.print("Enter number of writers: "); 
      int numWriters = scanner.nextInt(); 

      for (int i = 1; i <= numReaders; i++) {
        new Reader(i).start(); 
      } 

      for (int i = 1; i <= numWriters; i++) { 
          new Writer(i).start(); 
    }
    }
}`,
  },
  {
    title: " 8.Dining Philosophers Problem (Using Semaphore or mutex) ",
    description: "6",
    code: `import java.util.concurrent.locks.ReentrantLock; 
import java.util.Random; 
public class DiningPhilosophers { 
private static final int N = 5; 
private static final ReentrantLock[] chopsticks = new ReentrantLock[N];
private static final ReentrantLock criticalSection = new ReentrantLock(); 
 
public static void main(String[] args) { 
    Thread[] philosophers = new Thread[N]; 
    for (int i = 0; i < N; i++) { 
        chopsticks[i] = new ReentrantLock(); 
    } 

    for (int i = 0; i < N; i++) { 
        int id = i; 
        philosophers[i] = new Thread(new Philosopher(id)); 
        philosophers[i].start(); 
    } 

    // Optional: join all threads (they run infinitely) 
    for (int i = 0; i < N; i++) { 
        try { 
            philosophers[i].join(); 
        } catch (InterruptedException e) { 
            e.printStackTrace(); 
        } 
    } 
} 

static class Philosopher implements Runnable { 
    private final int id; 
    private final Random rand = new Random(); 

    Philosopher(int id) { 
        this.id = id; 
    } 

    @Override 
    public void run() { 
        int left = id; 
        int right = (id + 1) % N; 

        while (true) { 
            try { 
                // Thinking 
                System.out.println("Philosopher " + (id + 1) + " is thinking "); 
                Thread.sleep(rand.nextInt(3000) + 1000);
                 // Enter critical section to avoid deadlock 
                 criticalSection.lock(); 
 
                 if (chopsticks[left].tryLock()) { 
                     if (chopsticks[right].tryLock()) { 
                         // Got both chopsticks 
                         criticalSection.unlock(); // Leave critical section 
                         System.out.println("Philosopher " + (id + 1) + " picks up chopsticks " + (left + 
1) + " & " + (right + 1) ); 
                         System.out.println("Philosopher " + (id + 1) + " is eating "); 
                         Thread.sleep(rand.nextInt(3000) + 1000); 

                         chopsticks[right].unlock(); 
                         chopsticks[left].unlock(); 
                         System.out.println("Philosopher " + (id + 1) + " puts down chopsticks " + (left + 1) + " & " + (right + 1) ); 
                     } else { 
                         // Couldn't get right chopstick 
                         chopsticks[left].unlock(); 
                         criticalSection.unlock(); 
                         System.out.println("Philosopher " + (id + 1) + " couldn't get both chopsticks, waiting...");
        } 
} else { 
    // Couldn't get left chopstick 
    criticalSection.unlock(); 
    System.out.println("Philosopher " + (id + 1) + " couldn't get both chopsticks, waiting..."); 
} 

} catch (InterruptedException e) { 
e.printStackTrace();
}
}
}
}
}`,
  },
  {
    title: "  9.Inter-process Communication (IPC) in Linux using Pipes ",
    description: "7 (A)",
    code: `import java.io.*; 
    // create onr first.txt -> hello
 
public class FullDuplexPipe { 
    public static void main(String[] args) throws IOException { 
        // Create piped streams 
        PipedOutputStream parentToChildOut = new PipedOutputStream(); 
        PipedInputStream parentToChildIn = new PipedInputStream(parentToChildOut); 
 
        PipedOutputStream childToParentOut = new PipedOutputStream(); 
        PipedInputStream childToParentIn = new PipedInputStream(childToParentOut);

         // Start child thread 
         Thread child = new Thread(() -> { 
            try { 
                BufferedReader childReader = new BufferedReader(new 
InputStreamReader(parentToChildIn)); 
                String fileName = childReader.readLine(); 
 
                File file = new File(fileName); 
                if (!file.exists()) { 
                    BufferedWriter errorWriter = new BufferedWriter(new 
OutputStreamWriter(childToParentOut)); 
                    errorWriter.write("File not found: " + fileName); 
                    errorWriter.newLine(); 
                    errorWriter.flush(); 
                    errorWriter.close(); 
                    return; 
                } 
 
                BufferedReader fileReader = new BufferedReader(new FileReader(file)); 
                BufferedWriter childWriter = new BufferedWriter(new 
OutputStreamWriter(childToParentOut)); 
 
                String line;

                while ((line = fileReader.readLine()) != null) { 
                    childWriter.write(line); 
                    childWriter.newLine(); 
                } 
 
                childWriter.flush(); 
                childWriter.close(); 
                fileReader.close(); 
            } catch (IOException e) { 
                e.printStackTrace(); 
            } 
        }); 
 
        child.start(); 
 
        // Parent process 
        BufferedWriter parentWriter = new BufferedWriter(new 
OutputStreamWriter(parentToChildOut)); 
        BufferedReader parentReader = new BufferedReader(new 
InputStreamReader(childToParentIn)); 
 
        BufferedReader inputReader = new BufferedReader(new InputStreamReader(System.in));
        System.out.print("Enter filename: "); 
        String filename = inputReader.readLine(); 
 
        parentWriter.write(filename); 
        parentWriter.newLine(); 
        parentWriter.flush(); 
        parentWriter.close(); // Done writing 
 
        // Parent reads file content 
        System.out.println("\n--- File Content ---"); 
        String line; 
        while ((line = parentReader.readLine()) != null) { 
            System.out.println(line); 
        } 
 
        parentReader.close();
    }
}`,
  },
  {
    title: " 10.Inter-process Communication (IPC) in Linux using FIFO.  ",
    description: "7 (B)",
    code: ` 
    //process1 

import java.io.*; 

import java.nio.file.*; 

public class process1 { 
    public static void main(String[] args) { 
    String fifo1 = "fifo1.txt"; 
    String fifo2 = "fifo2.txt";

    try { 
        // Accept sentence from user 
        BufferedReader reader = new BufferedReader(new InputStreamReader(System.in)); 
        System.out.print("Enter a sentence: "); 
        String sentence = reader.readLine(); 

        // Write to fifo1.txt (send to process2) 
        BufferedWriter writer = Files.newBufferedWriter(Paths.get(fifo1)); 
        writer.write(sentence); 
        writer.close(); 

        // Wait for process2 to write the result 
        System.out.println("Waiting for analysis result from process2..."); 

        // Busy wait until fifo2.txt exists and has content 
        while (!Files.exists(Paths.get(fifo2)) || Files.size(Paths.get(fifo2)) == 0) { 
            Thread.sleep(100); // sleep for 100 ms 
        } 

        // Read from fifo2.txt (get result from process2)

        BufferedReader resultReader = Files.newBufferedReader(Paths.get(fifo2)); 
        String line;  
        System.out.println("\n--- Analysis Result ---"); 
        while ((line = resultReader.readLine()) != null) { 
            System.out.println(line); 
        } 
        resultReader.close(); 

        // Optional: delete the files to clean up 
        Files.deleteIfExists(Paths.get(fifo1)); 
        Files.deleteIfExists(Paths.get(fifo2)); 

    } catch (Exception e) { 
        e.printStackTrace();
    }
}
}

// create 2 file process1.java & process2.java


//process2 
import java.io.*; 
import java.nio.file.*;

import java.util.StringTokenizer; 
 
public class process2 { 
    public static void main(String[] args) { 
        String fifo1 = "fifo1.txt"; 
        String fifo2 = "fifo2.txt"; 
        String resultFile = "result.txt"; 
 
        try { 
            // Wait until fifo1.txt has content 
            while (!Files.exists(Paths.get(fifo1)) || Files.size(Paths.get(fifo1)) == 0) { 
                Thread.sleep(100); // sleep for 100 ms 
            } 
 
            // Read from fifo1.txt (input from process1) 
            BufferedReader reader = Files.newBufferedReader(Paths.get(fifo1)); 
            String sentence = reader.readLine(); 
            reader.close(); 
 
            // Analyze sentence 
            int chars = sentence.length(); 

            int words = new StringTokenizer(sentence).countTokens(); 
            int lines = sentence.split("\\n").length;  
 
            String result = "Characters: " + chars + "\n" + 
                            "Words: " + words + "\n" + 
                            "Lines: " + lines + "\n"; 
 
            // Write to result.txt 
            Files.writeString(Paths.get(resultFile), result); 
 
            // Read from result.txt and write to fifo2.txt 
            BufferedReader fileReader = Files.newBufferedReader(Paths.get(resultFile)); 
            BufferedWriter pipeWriter = Files.newBufferedWriter(Paths.get(fifo2)); 
 
            String line; 
            while ((line = fileReader.readLine()) != null) { 
                pipeWriter.write(line); 
                pipeWriter.newLine(); 
            } 
 
            fileReader.close();

            pipeWriter.close(); 
 
            // Optional: delete result.txt 
            Files.deleteIfExists(Paths.get(resultFile)); 
 
        } catch (Exception e) { 
            e.printStackTrace(); 
        }
    }
}
    `,
  },
  {
    title: " UNIX Process Control- Program-II ",
    description: "3 (B)",
    code: `
        /* ======Child Process for Binary search====== */

        #include <stdio.h> 
#include <stdlib.h>  
#define MAX 20 
 
int binary_search(int a[MAX], int f, int l, int s); // Prototype for Binary search 
 
int main(int argc, char *argv[]) { // Arguments passed by execve call 
   int i, s, f; 
   int a[MAX]; 
 
   for (i = 1; i < argc; i++) // Converting Constant strings 
       a[i - 1] = atoi(argv[i]); // into array of integers 
 
   printf("\n\tThe sorted array is:\n"); 
   for (i = 0; i < argc - 1; i++) 
       printf("\t%d", a[i]); 
 
   printf("\n\tEnter the element you want to search: "); 
   scanf("%d", &s); 
 
   f = binary_search(a, 0, argc - 2, s); 
 
   if (f != -1) 
       printf("\n\tThe element %d Found at %d location..!!!!\n", s, f + 1); 
   else 
       printf("\n\tThe element %d is not present in the list..!!!!\n\n", s); 
 
   return 0; 
} 
 
   /* ====Definition of binary search==== */ 
 
int binary_search(int a[MAX], int f, int l, int s) { 
   int mid; 
   while (f <= l) { 
       mid = (f + l) / 2; 
       if (s == a[mid]) 
           return mid; 
       else if (s < a[mid]) 
           l = mid - 1; 
       else
         f = mid + 1; 
   } 
   return -1; 
}


// OUTPUT  

vinaybasargekar@Vinays-MacBook-Air % gcc child.c -o child 
./child 1 3 5 7 9 11 
 
 
        The sorted array is: 
        1       3       5       7       9       11 
        Enter the element you want to search: 5 
 
        The element 5 Found at 3 location..!!!! 



/* ========Implementation of execve() system call========*/

  /*Parent sorts array and pass to child for binary search*/ 

  #include<stdio.h> 
#include<string.h> 
#include<unistd.h> // For execve system call 
#define MAX 20 
 
void quicksort(int a[MAX],int,int); // Protype of Quick sort 
 
int main() 
{ 
 int a[MAX],n,i; 
 char str[5]; 
 char *str1[MAX]; 
 char ch; 
 pid_t pid; 
 
 //Accepting the array elements from user 
 
 printf("\n\tEnter the number of elements : "); 
 scanf("%d",&n); 
  
 printf("\n\tEnter the %d Elements : \n",n);
 for(i=0;i<n;i++) 
 { 
  printf("\t");   
  scanf("%d",&a[i]); 
 }

 /* =====Performing fork() system call==== */ 
 
 pid=fork(); 
  
 if(pid<0) // If Process not created successfully 
 { 
  printf("Error while creating new process...!!!!"); 
 } 
 
 else if(pid>0) // For Parent process 
 { 
  quicksort(a,0,n-1); //Performing quick sort on an array  
 
  for(i=0;i<MAX;i++) // String to be passed in execve 
   str1[i]=NULL; // call should terminated by NULL 
    
 
  /* ===Converting integer array into array of strings=== */ 
 
  for(i=0;i<n;i++) 
  { 
   sprintf(str,"%d",a[i]); 
   str1[i]=strdup(str); 
  } 
  execve("child",str1,NULL); // Call to execve 
 } 
 else // For Child process 
 { 
 
 } 
 return 0; 
}

/* ======Defination of Quick sort====== */ 
 
void quicksort(int a[MAX],int f,int l) 
{ 
 int i,j,pivote,temp;
 if(f<l) 
 { 
  i=pivote=f; 
  j=l; 
  while(i<j) 
  { 
   while(a[i]<a[pivote] && i<l) 
    i++; 
   while(a[j]>a[pivote]) 
    j--; 
   if(i<j) 
   { 
    temp=a[j]; 
    a[j]=a[i]; 
    a[i]=temp; 
   } 
  } 
  temp=a[j]; 
  a[j]=a[pivote]; 
  a[pivote]=temp; 
  quicksort(a,f,j-1); 
  quicksort(a,j+1,l); 
 } 
} 

// OUTPUT 
 
 /* ====Output of execve() system call==== */ 
 
akash@akash-desktop:~$ cc -o ./child child.c 
akash@akash-desktop:~$ cc -o child child.c 
akash@akash-desktop:~$ cc -o ex execv.c 
akash@akash-desktop:~$ ./ex 
 
 Enter the number of elements : 6 
 
 Enter the 6 Elements :  
 365 
 94 
 120 
 1024 
 1 
 16

 The sorted array is :  
1 
16 
94 
120 
365 
1024 
Enter the element you want to search : 120 
The element 120 Found at 4 location..!!!! 

    `,
  },
  {
    title: " UNIX Process Control- I (BIG)  ",
    description: "3 (A) (BIG) ",
    code: `
    // Orphan Process
    /* =========Orphan Process using Fork system Call=========== */ 
/*Parent process sorts array using merge sort && child process sorts array using Quick sort */

#include<stdio.h> 
#include<unistd.h> 
#include<sys/types.h> // For fork() system call and pid_t data type 
#define MAX 20 
void quicksort(int a[],int,int);  
//prototype of Quick sort   
void merge(int a[], int low, int mid, int high); 
void divide(int a[], int low, int high); 
int main(){ 
pid_t pid; 
//prototype of Merge sort 
// Declaration of pid which will store process ID 
int a[MAX],n; 
int i; 
// Accepting Elements of an array 
printf("\n\tEnter the no. of elements: "); 
scanf("%d",&n); 
printf("\n\tEnter the elements: \n"); 
for(i=0;i<n;i++){ 
printf("\t"); 
scanf("%d",&a[i]); 
} 
/* =====Performing fork() system call==== */ 
pid=fork(); 
if(pid<0)  
// If Process not created successfully 
{ 
printf("Error While creating a new process.....!!!!!!"); 
}  
else if(pid==0)  
// For Child process 
{
wait();  // For Orphan process 
  printf("\n\t==============Child process started============="); 
  printf("\n\tI am a child process with pid=%d and ppid=%d",getpid(),getppid()); 
  quicksort(a,0,n-1); //Performing quick sort in child process 
  printf("\n\n\tSorted array by quick sort:\n\t"); 
for(i=0;i<n;i++) 
printf("%d\t",a[i]); 
printf("\n"); 
  printf("\n\t==============Child  
process terminated=============\n"); 
 }else   // For Parent process 
 { 
  printf("\n\t==============Parent process started============="); 
  printf("\n\n\tI am a parent process with pid=%d ",getpid()); 
  divide(a, 0, n-1); //Performing merge sort in parent process 
  printf("\n\n\tSorted array by merge sort:\n\t") 
  for(i=0;i<n;i++) 
   printf("%d\t",a[i]); 
  printf("\n"); 
  printf("\n\t==============Parent process terminated=============\n"); 
 
 } 
execl("/bin/ps","ps",NULL); 
return 0; 
} 
 /* ==== Definition of Quick Sort ====*/ 
void quicksort(int a[MAX],int first,int last){ 
 int pivot,j,i,temp; 
 if(first<last) 
 { 
  i=first; 
  j=last; 
  pivot=first; 
  while(i<j){ 
   while(a[i]<=a[pivot] && i<last) 
   i++; 
   while(a[j]>a[pivot]) 
   j--; 
   if(i<j){ 
    temp=a[i];
    a[i]=a[j]; 
    a[j]=temp; 
}  
} 
temp=a[j]; 
 
  a[j]=a[pivot]; 
 
  a[pivot]=temp; 
 
  quicksort(a,first,j-1); 
 
  quicksort(a,j+1,last); 
 
 } 
 
} 
 
 
 /* ==== Definition of Merge Sort ====*/ 
 
void divide(int a[MAX], int low, int high){ 
 
 if(low<high) // The array has atleast 2 elements{ 
 
  int mid = (low+high)/2; 
 
  divide(a, low, mid);     // Recursion chain to sort first half of the array 
 
  divide(a, mid+1, high);  // Recursion chain to sort second half of the array 
 
  merge(a, low, mid, high); 
 
 } 
 
} 
void merge(int a[MAX], int low, int mid, int high){ 
 
 int i, j, k, m = mid-low+1, n = high-mid; 

 int first_half[m], second_half[n]; 
 
 for(i=0; i<m; i++)  // Extract first half (already sorted) 
 
  first_half[i] = a[low+i]; 
 
 
 for(i=0; i<n; i++)  // Extract second half (already sorted) 
 
  second_half[i] = a[mid+i+1]; 
 
 
 i=j=0; 
 
 k = low; 
 
 while(i<m || j<n)  // Merge the two halves 
  
 { 
 
  if(i >= m) 
 
  { 
 
   a[k++] = second_half[j++]; 
 
   continue; 
 
  } 
 
  if(j >= n) 
 
  { 
 
   a[k++] = first_half[i++]; 
 
   continue; 
 
  }
   if(first_half[i] < second_half[j]) 
 
   a[k++] = first_half[i++]; 
 
  else 
 
   a[k++] = second_half[j++]; 
 
 } 
 
}

// OUTPUT 
  
 
 /* ====== Output of Orphan Process ======*/ 
 
 
akash@akash-desktop:~$ cc orphan.c 
akash@akash-desktop:~$ ./a.out 
 
 Enter the no. of elements: 5 
 
 Enter the elements:  
 8 
 2 
 7 
 3 
 6 
 
 ==============Parent process started============= 
 
 I am a parent process with pid=2424  
 
 Sorted array by merge sort: 
 2 3 6 7 8 
 ==============Parent process terminated============= 
PID TTY          
TIME CMD 
2371 pts/1    00:00:00 bash 
2424 pts/1    00:00:00 ps 
2425 pts/1    00:00:00 ps 
==============Child process started============= 
I am a child process with pid=2425 and ppid=2424 
Sorted array by quick sort: 
2 
3 
6 
7 
8  
==============Child process terminated============= 
PID TTY          
TIME CMD 
2371 pts/1    00:00:00 bash 
2425 pts/1    00:00:00 ps 
akash@akash-desktop:~$



// zombie process  
/*=========Zombie Process using Fork system Call============ */ 
/*Parent peocess sorts array using merge sort && child process sorts array using Quick sort */ 
#include<stdio.h> 
#include<unistd.h> 
#include<sys/types.h> // For fork() systemcall and pid_t data type 
#define MAX 20 
void quicksort(int a[],int,int);  
//prototype of Quick sort 
void merge(int a[], int low, int mid, int high); 
void divide(int a[], int low, int high); 
int main()
{ 
 
 pid_t pid; // Decleration of pid which will store process ID 
 
 
 int a[MAX],n; 
 
 int i; 
 
 
 
 // Accepting Elements of an array 
 
 
 
 printf("\n\tEnter the no. of elements: "); 
 
 scanf("%d",&n); 
 
 
 printf("\n\tEnter the elements: \n"); 
 
 for(i=0;i<n;i++) 
 
 { 
 
  printf("\t"); 
 
  scanf("%d",&a[i]); 
 
 } 
 
 
  
 /* =====Performing fork() system call==== */ 
 
 
 pid=fork(); 
  
if(pid<0)  // If Process not created successfully 
 
 {
printf("Error While creating a new process.....!!!!!!"); 
 
 } 
  
else if(pid==0)  // For Child process 
 
 { 
 
 
  printf("\n\t==============Child process started============="); 
 
  printf("\n\tI am a child process with pid=%d and ppid=%d",getpid(),getppid()); 
 
 
  quicksort(a,0,n-1); //Performing quick sort in child process 
 
 
  printf("\n\n\tSorted array by quick sort:\n\t"); 
 
 
  for(i=0;i<n;i++) 
 
   printf("%d\t",a[i]); 
 
   printf("\n"); 
  
 
  printf("\n\t==============Child process terminated=============\n"); 
 
 } 
 
 else   // For Parent process 
  
 { 
 
  wait();  // For Zombie process 
 
  printf("\n\t==============Parent process started============="); 
 
  printf("\n\n\tI am a parent process with pid=%d ",getpid()); 
 
 
  divide(a, 0, n-1); //Performing merge sort in parent process
  printf("\n\n\tSorted array by merge sort:\n\t"); 
 
 
  for(i=0;i<n;i++) 
 
   printf("%d\t",a[i]); 
 
  printf("\n"); 
  
 
  printf("\n\t==============Parent process terminated=============\n"); 
 
 } 
 
 
execl("/bin/ps","ps",NULL); 
return 0; 
 
} 
 
  
 
 /* ==== Definition of Quick Sort ====*/ 
 
 
void quicksort(int a[MAX],int first,int last) 
 
{ 
 
 
 int pivot,j,i,temp; 
 
 if(first<last) 
 
 { 
 
  i=first; 
 
  j=last; 
 
  pivot=first; 
 
  while(i<j)
  { 
 
   while(a[i]<=a[pivot] && i<last) 
 
    i++; 
 
   while(a[j]>a[pivot]) 
 
    j--; 
 
   if(i<j) 
 
   { 
 
    temp=a[i]; 
  
    a[i]=a[j]; 
 
    a[j]=temp; 
 
   } 
 
  } 
 
  temp=a[j]; 
 
  a[j]=a[pivot]; 
 
  a[pivot]=temp; 
 
  quicksort(a,first,j-1); 
 
  quicksort(a,j+1,last); 
 
 } 
 
} 
 
 
 
 /* ==== Definition of Merge Sort ====*/

 void divide(int a[MAX], int low, int high) 
 
{ 
 
 if(low<high) // The array has atleast 2 elements 
 
 { 
 
  int mid = (low+high)/2; 
 
  divide(a, low, mid);     // Recursion chain to sort first half of the array 
 
  divide(a, mid+1, high);  // Recursion chain to sort second half of the array 
 
  merge(a, low, mid, high); 
 
 } 
 
} 
 
 
 
void merge(int a[MAX], int low, int mid, int high) 
 
{ 
 
 int i, j, k, m = mid-low+1, n = high-mid; 
 
 int first_half[m], second_half[n]; 
 
 
 for(i=0; i<m; i++)  // Extract first half (already sorted) 
  
 first_half[i] = a[low+i]; 
 
 
 for(i=0; i<n; i++)  // Extract second half (already sorted) 
 
  second_half[i] = a[mid+i+1]; 
 
 
 i=j=0;
 k = low; 
 
 
 while(i<m || j<n)  // Merge the two halves 
  
 { 
 
  if(i >= m) 
 
  { 
 
   a[k++] = second_half[j++]; 
 
   continue; 
 
  } 
 
  if(j >= n) 
 
  { 
 
   a[k++] = first_half[i++]; 
 
   continue; 
 
  } 
 
  if(first_half[i] < second_half[j]) 
  
   a[k++] = first_half[i++]; 
 
  else 
 
   a[k++] = second_half[j++]; 
 
 } 
 
} 
 
// Output 
 
 
 /* ====== Output of Zombie Process ======*/
 akash@akash-desktop:~$ cc zombie.c 
akash@akash-desktop:~$ ./a.out 
Enter the no. of elements: 5 
Enter the elements:  
79 
12 
45 
32 
91 
==============Child process started============= 
I am a child process with pid=2632 and ppid=2631 
Sorted array by quick sort: 
12 
32 
45 
79 
91  
==============Child process terminated============= 
PID TTY          
TIME CMD 
2491 pts/12   00:00:00 bash 
2631 pts/12   00:00:00 a.out 
2632 pts/12   00:00:00 ps 
==============Parent process started============= 
I am a parent process with pid=2631  
Sorted array by merge sort: 
12 
32 
45 
79 
91  
==============Parent process terminated============= 
PID TTY          
TIME CMD 
2491 pts/12   00:00:00 bash 
2631 pts/12   00:00:00 ps 
akash@akash-desktop:~$








    `,
  },
  {
    title:
      " Demonstration of FORK, EXECVE and WAIT system calls along with Zombie and orphan state.  ",
    description: "3(A)Small",
    code: `
    // FORK 
 
#include<unistd.h> 
#include<stdio.h> 
 
int main() 
{ 
 pid_t pid; 
 
printf("\nI am the original process with pid %d and ppid %d.\n",getpid(),getppid()); 
pid=fork(); 
 
if(pid!=0) 
{ 
 printf("I am the parent process with pid %d and ppid %d\n",getpid(),getppid()); 
 printf("My child's pid is %d\n",pid); 
} 
else 
{ 
printf("\nI am the child process with pid %d and ppid %d\n", getpid(),getppid()); 
} 
printf("\npid %d terminates. \n", getpid()); 
} 

// OUTPUT 
cmd -> gcc -o fork fork.c
cmd -> ./fork
I am the parent process with pid 7497 and ppid 6998.
I am the parent process with pid 7497 and ppid 6998
My child's pid is 7498

pid 7497 terminates.

I am the child process with pid 7498 and ppid 1
pid 7498 terminates.


// ORPHAN 
 
#include<unistd.h> 
#include<stdio.h> 
 
int main() 
{ 
 pid_t pid; 
 
printf("\nI am the original process with pid %d and ppid %d.\n",getpid(),getppid()); 
 
pid=fork(); 
 
if(pid!=0) 
{ 
 printf("I am the parent process with pid %d and ppid %d\n",getpid(),getppid()); 
 printf("My child's pid is %d\n",pid); 
} 
 
else 
{ 
sleep(5); 
printf("\nI am the child process with pid %d and ppid %d\n", getpid(),getppid()); 
} 
 
printf("\npid %d terminates. \n", getpid()); 
} 
 
// OUTPUT 
vinaybasargekar@Vinays-MacBook-Air DSA % gcc -o fork fork.c
vinaybasargekar@Vinays-MacBook-Air DSA % ./fork

I am the parent process with PID 7433 and PPID 6998
My child's PID is 7434

I am the child process with PID 7434 and PPID 7433
vinaybasargekar@Vinays-MacBook-Air DSA % gcc -o fork fork.c
vinaybasargekar@Vinays-MacBook-Air DSA % ./fork

I am the original process with pid 7457 and ppid 6998.
I am the parent process with pid 7457 and ppid 6998
My child's pid is 7458

pid 7457 terminates.
vinaybasargekar@Vinays-MacBook-Air DSA %
I am the child process with pid 7458 and ppid 1

pid 7458 terminates.


//Zombie 
 
#include<unistd.h> 
#include<stdio.h> 
 
main() 
{ 
 pid_t pid; 
 
pid=fork(); 
if(pid!=0) 
{ 
 //while(1) 
sleep(20); 
 printf("\nI am parent process with pid %d and ppid %d\n", getpid(),getppid()); 
 printf("My child's pid is %d\n",pid);  
} 
else 
{ 
 printf("\nI am the child process with pid %d and ppid %d\n", getpid(),getppid());  
 exit(42); 
} 
} 

// OUTPUT 
vinaybasargekar@Vinays-MacBook-Air DSA % gcc -o fork fork.c
vinaybasargekar@Vinays-MacBook-Air DSA % ./fork

I am the parent process with PID 7433 and PPID 6998
My child's PID is 7434

I am the child process with PID 7434 and PPID 7433





    `,
  },
];
