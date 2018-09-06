import java.io.*;
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
        if (isWordValid(word)) {
          Set<String> substrings = genSubstrings(word);

          for (String substring : substrings) {
            insertSubstringWordPair(substring, word, substringMap);
          }
        }
      }

      reader.close();

      dumpMap(substringMap);
    } catch (FileNotFoundException e) {
      System.out.println("This file does not exist!");
      return;
    }
  }

  /**
  * Toss out any words that don't meet criteria:
  *  - Words must be at least 2 characters
  *  - Words must be a single word
  *  - Words must only contain alphabetic letters
  */
  private static boolean isWordValid(String word) {
    if(word.length() < 2) {
      return false;
    }

    for(int i = 0; i < word.length(); i++) {
      char c = word.charAt(i);
      if(!Character.isLetter(c)) {
        return false;
      }
    }

    return true;
  }

  /**
  * Write out the in-memory map to a file library.txt
  * Just overwrites anything that is there!!!
  */
  private static void dumpMap(Map<String, Set<String>> map) {
    File outfile = new File("./library.txt");
    try {
      FileWriter out = new FileWriter(outfile, false); // do not append, overwrite
      for (Map.Entry<String, Set<String>> entry : map.entrySet()) {
        out.write(entry.getKey() + ": " + entry.getValue() + "\n");
      }
      out.flush();
      out.close();
    } catch (IOException e) {
      System.err.println("Writing file failed. Try re-running or soemthing");
    }

  }

  /**
  * Insert a word into the set for the substring key in the given Map
  * If there is not an entry for the substring, one will be created.
  */
  private static void insertSubstringWordPair(String substring, String word, Map<String, Set<String>> map) {
    Set<String> words = map.get(substring);
    if (words == null) {
      words = new TreeSet<String>();
      map.put(substring, words);
    }
    words.add(word);
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
