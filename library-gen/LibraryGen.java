import java.io.File;
import java.io.FileNotFoundException;
import java.util.Scanner;

public class LibraryGen {

  public static void main(String[] args) {

    // open a library file from cmd line argument
    // expect this to just be text, 1 word per line
    if (args.length != 1) {
      instructions();
      return;
    }

    File wordsFile = new File(args[0]);
    // if (!wordsFile.exists()) {
    //   System.out.println("This file does not exist!");
    //   return;
    // }
    try {
      Scanner reader = new Scanner(wordsFile);

      while (reader.hasNext()) {
        System.out.println(reader.nextLine().trim().toLowerCase());
      }
    } catch (FileNotFoundException e) {
      System.out.println("This file does not exist!");
      return;
    }

  }

  private static void instructions() {
    System.out.println("Please give a single argument: \n" +
      "java LibraryGen [path/to/wordlist]");
  }

}
