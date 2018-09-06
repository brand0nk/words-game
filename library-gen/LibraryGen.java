import java.io.File;
import java.io.FileNotFoundException;
import java.util.*;

public class LibraryGen {

  public static void main(String[] args) {

    // open a library file from cmd line argument
    // expect this to just be text, 1 word per line
    if (args.length != 1) {
      instructions();
      return;
    }

    File wordsFile = new File(args[0]);

    try {
      Scanner reader = new Scanner(wordsFile);

      // setup a map b/c we can probably hold this all in memory
      // we'll just throw into this
      Map<String, Set<String>> substringMap = new HashMap<String, Set<String>>();

      while (reader.hasNext()) {
        String word = reader.nextLine().trim().toLowerCase();
        Set<String> substrings = genSubstrings(word);

        System.out.println(word = ":");
        System.out.println(substrings);
      }
    } catch (FileNotFoundException e) {
      System.out.println("This file does not exist!");
      return;
    }

  }

  /**
  * Generate all 2 and 3 character substrings of the word
  * Assumes the input is all lowercased
  */
  private static Set<String> genSubstrings (final String word) {
    // Idk let's just do a sliding window thing.
    Set<String> substrings = new TreeSet<String>();
    for(int i = 0; i < word.length(); i++) {
      if(i+2 <= word.length()) {
        substrings.add(word.substring(i, i+2));
      }

      if(i+3 <= word.length()) {
        substrings.add(word.substring(i, i+3));
      }
    }

    return substrings;

  }

  private static void instructions() {
    System.out.println("Please give a single argument: \n" +
      "java LibraryGen [path/to/wordlist]");
  }

}
