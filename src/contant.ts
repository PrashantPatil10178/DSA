export const codeExamples = [
  {
    title: "Library.sh",
    description: "2",
    code: `#!/bin/bash
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
     if grep -wq "^$rno" "$f1"
     then
       echo "Book number already exists! Duplicate not allowed."
     else
       echo "Enter name"
       read name
       echo "Enter author name"
       read add
       echo "$rno $name $add" >> $f1
       echo "Record added successfully."
     fi
     ;;
  
  2) echo "Entered record is as follows"
     cat $f1
     ;;
  
  3) echo "Enter Book no of record to be searched"
     read rn1
     if grep -w "^$rn1" "$f1"
     then
       echo "Record found"
     else
       echo "Record not found"
     fi
     ;;
  
  4) echo "Enter Book no of the record to be deleted"
     read rn1
     grep -vw "^$rn1" "$f1" > nf1
     echo "Library Database after record deletion is:"
     cp nf1 $f1
     cat $f1
     ;;
  
  5) echo "Enter Book no of record to be modified"
     read rn1
     if grep -w "^$rn1" "$f1"
     then
       grep -vw "^$rn1" "$f1" > nf1
       cp nf1 $f1
       echo "Enter new Book no"
       read nrno
       echo "Enter new book name"
       read nname
       echo "Enter new author name"
       read nadd
       echo "$nrno $nname $nadd" >> $f1
       echo "Record modified successfully."
     else
       echo "Record not found"
     fi
     ;;
  
  6) exit
     ;;
  
  *) echo "Invalid choice"
     ;;
  esac
  done`,
  },
  {
    title: "Orphan Sort",
    description: "3a-1",
    code: `// Orphan Process Example with Merge Sort and Quick Sort
  #include <stdio.h>
  #include <unistd.h>
  #include <sys/types.h>
  #include <sys/wait.h>  // Required for wait()
  #define MAX 20
  
  // Function Prototypes
  void quicksort(int a[], int, int);
  void merge(int a[], int, int, int);
  void divide(int a[], int, int);
  
  int main() {
      pid_t pid;
      int a[MAX], n, i;
  
      // Accept input
      printf("\\n\\tEnter the number of elements: ");
      scanf("%d", &n);
  
      printf("\\n\\tEnter the elements:\\n");
      for (i = 0; i < n; i++) {
          printf("\\t");
          scanf("%d", &a[i]);
      }
  
      // Create child process
      pid = fork();
  
      if (pid < 0) {
          printf("Error while creating a new process!\\n");
      } else if (pid == 0) {
          // CHILD PROCESS
          sleep(2); // Ensure parent exits first to become an orphan
          printf("\\n\\t============== Child process started =============");
          printf("\\n\\tI am a child process with pid=%d and ppid=%d", getpid(), getppid());
  
          quicksort(a, 0, n - 1);
  
          printf("\\n\\n\\tSorted array by Quick Sort:\\n\\t");
          for (i = 0; i < n; i++)
              printf("%d\\t", a[i]);
          printf("\\n\\t============== Child process terminated ============\\n");
  
      } else {
          // PARENT PROCESS
          printf("\\n\\t============== Parent process started =============");
          printf("\\n\\tI am a parent process with pid=%d\\n", getpid());
  
          divide(a, 0, n - 1);
  
          printf("\\n\\n\\tSorted array by Merge Sort:\\n\\t");
          for (i = 0; i < n; i++)
              printf("%d\\t", a[i]);
          printf("\\n\\t============== Parent process terminated ===========\\n");
  
          // Exit early to orphan the child
      }
  
      execl("/bin/ps", "ps", NULL); // Replaces current process with 'ps' to show processes
      return 0;
  }
  
  // Quick Sort
  void quicksort(int a[MAX], int first, int last) {
      int pivot, j, i, temp;
      if (first < last) {
          pivot = first;
          i = first;
          j = last;
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
  
  // Merge Sort
  void divide(int a[MAX], int low, int high) {
      if (low < high) {
          int mid = (low + high) / 2;
          divide(a, low, mid);
          divide(a, mid + 1, high);
          merge(a, low, mid, high);
      }
  }
  
  void merge(int a[MAX], int low, int mid, int high) {
      int i, j, k;
      int m = mid - low + 1;
      int n = high - mid;
  
      int first_half[m], second_half[n];
  
      for (i = 0; i < m; i++)
          first_half[i] = a[low + i];
      for (i = 0; i < n; i++)
          second_half[i] = a[mid + 1 + i];
  
      i = j = 0;
      k = low;
  
      while (i < m && j < n) {
          if (first_half[i] < second_half[j])
              a[k++] = first_half[i++];
          else
              a[k++] = second_half[j++];
      }
  
      while (i < m)
          a[k++] = first_half[i++];
      while (j < n)
          a[k++] = second_half[j++];
  }`,
  },
  {
    title: "Zombie Sort",
    description: "3a-2",
    code: `/* 
      Parent process performs Merge Sort 
      Child process performs Quick Sort 
      The parent does NOT call wait(), so the child becomes a zombie after termination.
  */
  
  #include <stdio.h>
  #include <unistd.h>
  #include <sys/types.h> // For fork(), pid_t
  #define MAX 20
  
  void quicksort(int a[], int, int);
  void merge(int a[], int low, int mid, int high);
  void divide(int a[], int low, int high);
  
  int main() {
      pid_t pid;
      int a[MAX], n;
      int i;
  
      printf("\\n\\tEnter the no. of elements: ");
      scanf("%d", &n);
  
      printf("\\n\\tEnter the elements:\\n");
      for (i = 0; i < n; i++) {
          printf("\\t");
          scanf("%d", &a[i]);
      }
  
      // Create a child process
      pid = fork();
  
      if (pid < 0) {
          printf("Error while creating a new process...!!!\\n");
      }
  
      else if (pid == 0) {
          // Child Process
          printf("\\n\\t==============Child process started=============");
          printf("\\n\\tI am a child process with pid=%d and ppid=%d", getpid(), getppid());
  
          quicksort(a, 0, n - 1);
  
          printf("\\n\\n\\tSorted array by Quick Sort:\\n\\t");
          for (i = 0; i < n; i++)
              printf("%d\\t", a[i]);
  
          printf("\\n\\t==============Child process terminated=============\\n");
  
          // List current processes from child before it terminates
          execl("/bin/ps", "ps", NULL);
      }
  
      else {
          // Parent Process — NOTICE: NO wait();
          sleep(5); // Give child time to exit (become zombie)
          printf("\\n\\t==============Parent process started=============");
          printf("\\n\\tI am a parent process with pid=%d", getpid());
  
          divide(a, 0, n - 1);
  
          printf("\\n\\n\\tSorted array by Merge Sort:\\n\\t");
          for (i = 0; i < n; i++)
              printf("%d\\t", a[i]);
  
          printf("\\n\\t==============Parent process terminated=============\\n");
  
          // List processes again — child may be shown as <defunct>
          execl("/bin/ps", "ps", NULL);
      }
  
      return 0;
  }
  
  /* ========== Quick Sort ========== */
  void quicksort(int a[MAX], int first, int last) {
      int i, j, pivot, temp;
  
      if (first < last) {
          pivot = first;
          i = first;
          j = last;
  
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
  
          temp = a[pivot];
          a[pivot] = a[j];
          a[j] = temp;
  
          quicksort(a, first, j - 1);
          quicksort(a, j + 1, last);
      }
  }
  
  /* ========== Merge Sort ========== */
  void divide(int a[MAX], int low, int high) {
      if (low < high) {
          int mid = (low + high) / 2;
          divide(a, low, mid);
          divide(a, mid + 1, high);
          merge(a, low, mid, high);
      }
  }
  
  void merge(int a[MAX], int low, int mid, int high) {
      int i, j, k, m = mid - low + 1, n = high - mid;
      int left[m], right[n];
  
      for (i = 0; i < m; i++)
          left[i] = a[low + i];
      for (i = 0; i < n; i++)
          right[i] = a[mid + 1 + i];
  
      i = j = 0;
      k = low;
  
      while (i < m && j < n) {
          if (left[i] <= right[j])
              a[k++] = left[i++];
          else
              a[k++] = right[j++];
      }
  
      while (i < m)
          a[k++] = left[i++];
      while (j < n)
          a[k++] = right[j++];
  }`,
  },
  {
    title: "child process",
    description: "3b-1",
    code: `// child.c
  #include <stdio.h>
  #include <stdlib.h>
  #define MAX 20
  
  int binary_search(int a[MAX], int f, int l, int s);
  
  int main(int argc, char *argv[]) {
      int i, s, f;
      int a[MAX];
  
      // Convert command-line arguments into integer array
      for (i = 1; i < argc; i++)
          a[i - 1] = atoi(argv[i]);
  
      printf("\\n\\tThe sorted array is:\\n");
      for (i = 0; i < argc - 1; i++)
          printf("\\t%d", a[i]);
  
      printf("\\n\\tEnter the element you want to search: ");
      scanf("%d", &s);
  
      f = binary_search(a, 0, argc - 2, s);
  
      if (f != -1)
          printf("\\n\\tThe element %d Found at %d location..!!!!\\n", s, f + 1);
      else
          printf("\\n\\tThe element %d is not present in the list..!!!!\\n\\n", s);
  
      return 0;
  }
  
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
  }`,
  },
  {
    title: "Parent",
    description: "3b-2",
    code: `// execv.c
  #include <stdio.h>
  #include <stdlib.h>
  #include <unistd.h> // for execve()
  #include <string.h>
  #define MAX 20
  
  void quicksort(int a[MAX], int low, int high);
  
  int main() {
      int a[MAX], n, i;
      char str[5];
      char *args[MAX];
      pid_t pid;
  
      printf("\\n\\tEnter the number of elements : ");
      scanf("%d", &n);
  
      printf("\\n\\tEnter the %d Elements : \\n", n);
      for (i = 0; i < n; i++) {
          printf("\\t");
          scanf("%d", &a[i]);
      }
  
      pid = fork();
  
      if (pid < 0) {
          printf("Error while creating new process...!!!!");
      } else if (pid > 0) {
          // Parent process
          quicksort(a, 0, n - 1);  // Sort the array
  
          for (i = 0; i < MAX; i++)
              args[i] = NULL;      // Terminate string list with NULL
  
          // Convert int array to string array
          for (i = 0; i < n; i++) {
              sprintf(str, "%d", a[i]);
              args[i] = strdup(str); // Duplicate string to store in array
          }
  
          execve("./child", args, NULL); // Replace process with ./child
      } else {
          // Optional: child stays idle
      }
  
      return 0;
  }
  
  void quicksort(int a[MAX], int low, int high) {
      int i, j, pivot, temp;
  
      if (low < high) {
          pivot = i = low;
          j = high;
  
          while (i < j) {
              while (a[i] <= a[pivot] && i < high) i++;
              while (a[j] > a[pivot]) j--;
  
              if (i < j) {
                  temp = a[i];
                  a[i] = a[j];
                  a[j] = temp;
              }
          }
  
          temp = a[j];
          a[j] = a[pivot];
          a[pivot] = temp;
  
          quicksort(a, low, j - 1);
          quicksort(a, j + 1, high);
      }
  }`,
  },
  {
    title: "ProducerConsumer",
    description: "4",
    code: `import java.util.LinkedList;
  import java.util.Queue;
  import java.util.Random;
  
  public class ProducerConsumer {
      private static final int BUFFER_SIZE = 5;
      private static final Queue<Integer> buffer = new LinkedList<>();
      private static final Object lock = new Object();
  
      public static void main(String[] args) {
          Thread producer = new Thread(() -> {
              Random rand = new Random();
              while (true) {
                  try {
                      int item = rand.nextInt(100);
                      synchronized (lock) {
                          while (buffer.size() == BUFFER_SIZE) {
                              lock.wait(); // Wait if buffer is full
                          }
                          buffer.add(item);
                          System.out.println("🥤 Producer produced: " + item + " | Buffer size: " + buffer.size());
                          lock.notifyAll(); // Notify all waiting threads (preferable to notify)
                      }
                      Thread.sleep(1000); // Simulate production time
                  } catch (InterruptedException e) {
                      Thread.currentThread().interrupt(); // Good practice in multithreading
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
                          System.out.println("🍔 Consumer consumed: " + item + " | Buffer size: " + buffer.size());
                          lock.notifyAll(); // Notify producer
                      }
                      Thread.sleep(1000); // Simulate consumption time
                  } catch (InterruptedException e) {
                      Thread.currentThread().interrupt(); // Good practice in multithreading
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
    title: "ReaderWriter",
    description: "5",
    code: `import java.util.Scanner;
  import java.util.concurrent.locks.ReentrantReadWriteLock;
  
  public class ReaderWriter {
  
      private static final ReentrantReadWriteLock rwLock = new ReentrantReadWriteLock(); // multiple readers, one writer
      private static final Object printLock = new Object(); // for clean console output
  
      static class Reader extends Thread {
          private final int id;
  
          Reader(int id) {
              this.id = id;
          }
  
          @Override
          public void run() {
              while (true) {
                  rwLock.readLock().lock(); // Reader acquires read lock
                  try {
                      synchronized (printLock) {
                          System.out.println(" Reader " + id + " is reading.");
                      }
                  } finally {
                      rwLock.readLock().unlock(); // Reader releases lock
                  }
  
                  try {
                      Thread.sleep(1000); // Simulate reading time
                  } catch (InterruptedException e) {
                      Thread.currentThread().interrupt();
                      System.err.println("Reader " + id + " interrupted.");
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
                  rwLock.writeLock().lock(); // Writer acquires write lock
                  try {
                      synchronized (printLock) {
                          System.out.println(" Writer " + id + " is writing.");
                      }
                  } finally {
                      rwLock.writeLock().unlock(); // Writer releases lock
                  }
  
                  try {
                      Thread.sleep(2000); // Simulate writing time
                  } catch (InterruptedException e) {
                      Thread.currentThread().interrupt();
                      System.err.println("Writer " + id + " interrupted.");
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
  
          // Start all readers
          for (int i = 1; i <= numReaders; i++) {
              new Reader(i).start();
          }
  
          // Start all writers
          for (int i = 1; i <= numWriters; i++) {
              new Writer(i).start();
          }
      }
  }`,
  },
  {
    title: "DiningPhilosophers",
    description: "6",
    code: `import java.util.concurrent.locks.ReentrantLock;
  import java.util.Random;
  
  public class DiningPhilosophers {
      private static final int N = 5;
      private static final ReentrantLock[] chopsticks = new ReentrantLock[N];
      private static final ReentrantLock criticalSection = new ReentrantLock(); // prevents deadlock
  
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
  
          // Optional: join threads (they run infinitely)
          for (Thread philosopher : philosophers) {
              try {
                  philosopher.join();
              } catch (InterruptedException e) {
                  Thread.currentThread().interrupt();
                  System.err.println("Philosopher thread interrupted.");
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
                      System.out.println("Philosopher " + (id + 1) + " is thinking...");
                      Thread.sleep(rand.nextInt(3000) + 1000);
  
                      // Try to pick up both chopsticks inside critical section
                      criticalSection.lock();
                      try {
                          if (chopsticks[left].tryLock()) {
                              if (chopsticks[right].tryLock()) {
                                  // Got both chopsticks
                                  System.out.println("Philosopher " + (id + 1) + " picks up chopsticks " + (left + 1) + " & " + (right + 1));
                                  System.out.println("Philosopher " + (id + 1) + " is eating...");
                                  Thread.sleep(rand.nextInt(3000) + 1000);
  
                                  chopsticks[right].unlock();
                                  chopsticks[left].unlock();
                                  System.out.println("Philosopher " + (id + 1) + " puts down chopsticks " + (left + 1) + " & " + (right + 1));
                              } else {
                                  // Couldn't get right chopstick
                                  chopsticks[left].unlock();
                                  System.out.println("Philosopher " + (id + 1) + " couldn't get both chopsticks, waiting...");
                              }
                          } else {
                              // Couldn't get left chopstick
                              System.out.println("Philosopher " + (id + 1) + " couldn't get both chopsticks, waiting...");
                          }
                      } finally {
                          if (criticalSection.isHeldByCurrentThread()) {
                              criticalSection.unlock();
                          }
                      }
  
                  } catch (InterruptedException e) {
                      Thread.currentThread().interrupt();
                      System.err.println("Philosopher " + (id + 1) + " was interrupted.");
                  }
              }
          }
      }
  }`,
  },
  {
    title: "Full Duplex Pipe",
    description: "7a",
    code: `import java.io.*;
  
  public class FullDuplexPipe {
      public static void main(String[] args) throws IOException {
          // Full-duplex communication: parent ↔️ child via piped streams
  
          // Pipe: Parent → Child
          PipedOutputStream parentToChildOut = new PipedOutputStream();
          PipedInputStream parentToChildIn = new PipedInputStream(parentToChildOut);
  
          // Pipe: Child → Parent
          PipedOutputStream childToParentOut = new PipedOutputStream();
          PipedInputStream childToParentIn = new PipedInputStream(childToParentOut);
  
          // Start child thread
          Thread child = new Thread(() -> {
              try (
                  BufferedReader childReader = new BufferedReader(new InputStreamReader(parentToChildIn));
                  BufferedWriter childWriter = new BufferedWriter(new OutputStreamWriter(childToParentOut))
              ) {
                  // Read filename from parent
                  String fileName = childReader.readLine();
                  File file = new File(fileName);
  
                  if (!file.exists()) {
                      childWriter.write(" File not found: " + fileName);
                      childWriter.newLine();
                      childWriter.flush();
                      return;
                  }
  
                  // Read file and send content to parent
                  try (BufferedReader fileReader = new BufferedReader(new FileReader(file))) {
                      String line;
                      while ((line = fileReader.readLine()) != null) {
                          childWriter.write(line);
                          childWriter.newLine();
                      }
                      childWriter.flush();
                  }
              } catch (IOException e) {
                  e.printStackTrace();
              }
          });
  
          child.start();
  
          // Parent process
          try (
              BufferedWriter parentWriter = new BufferedWriter(new OutputStreamWriter(parentToChildOut));
              BufferedReader parentReader = new BufferedReader(new InputStreamReader(childToParentIn));
              BufferedReader inputReader = new BufferedReader(new InputStreamReader(System.in))
          ) {
              System.out.print("Enter filename: ");
              String filename = inputReader.readLine();
  
              // Send filename to child
              parentWriter.write(filename);
              parentWriter.newLine();
              parentWriter.flush();
  
              System.out.println("\\n --- File Content ---");
              String line;
              while ((line = parentReader.readLine()) != null) {
                  System.out.println(line);
              }
          }
      }
  }`,
  },
  {
    title: "Process 1",
    description: "7b-1",
    code: `import java.io.*;
  import java.nio.file.*;
  
  public class Process1 {
      public static void main(String[] args) {
          String fifo1 = "fifo1.txt";
          String fifo2 = "fifo2.txt";
  
          try {
              BufferedReader reader = new BufferedReader(new InputStreamReader(System.in));
              System.out.print("Enter a sentence: ");
              String sentence = reader.readLine();
  
              // Write to fifo1.txt (send to process2)
              Files.writeString(Paths.get(fifo1), sentence);
  
              // Wait for fifo2.txt to be created and filled
              System.out.println("Waiting for analysis result from Process2...");
  
              while (!Files.exists(Paths.get(fifo2)) || Files.size(Paths.get(fifo2)) == 0) {
                  Thread.sleep(100);
              }
  
              // Read from fifo2.txt
              System.out.println("\\n--- Analysis Result ---");
              BufferedReader resultReader = Files.newBufferedReader(Paths.get(fifo2));
              String line;
              while ((line = resultReader.readLine()) != null) {
                  System.out.println(line);
              }
              resultReader.close();
  
              // Optional cleanup
              Files.deleteIfExists(Paths.get(fifo1));
              Files.deleteIfExists(Paths.get(fifo2));
  
          } catch (Exception e) {
              e.printStackTrace();
          }
      }
  }`,
  },
  {
    title: "Process 2",
    description: "7b-2",
    code: `import java.io.*;
  import java.nio.file.*;
  import java.util.StringTokenizer;
  
  public class Process2 {
      public static void main(String[] args) {
          String fifo1 = "fifo1.txt";
          String fifo2 = "fifo2.txt";
  
          try {
              // Wait until fifo1.txt exists and has content
              while (!Files.exists(Paths.get(fifo1)) || Files.size(Paths.get(fifo1)) == 0) {
                  Thread.sleep(100);
              }
  
              // Read the input sentence
              String sentence = Files.readString(Paths.get(fifo1));
  
              // Analyze
              int characters = sentence.length();
              int words = new StringTokenizer(sentence).countTokens();
              int lines = sentence.split("\\n").length;
  
              String result = "Characters: " + characters + "\\n" +
                              "Words: " + words + "\\n" +
                              "Lines: " + lines + "\\n";
  
              // Write analysis to fifo2.txt
              Files.writeString(Paths.get(fifo2), result);
  
          } catch (Exception e) {
              e.printStackTrace();
          }
      }
  }`,
  },
];
